from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404, HttpResponseRedirect
from django.urls import reverse
from django.template import loader
from django.http import JsonResponse
from .models import Question, Choice
import requests
from .sheet import main as googlesheet

# Create your views here.

# '''Note that once we done this in all these views, we no longer need to import loader and HttpResponse (you want to keep HttpResponse if you still have the stub methods for detail, results, and vote).

# The render() function takes the request object as its first argument, a template name as its second argument and a dictionary as its optional third argument. It returns an HttpResponse object of the given template rendered with the given context.'''


def index(request):
    # return HttpResponse({'hello': 'world'})
    # below was hard coded
    # latest_question_list = Question.objects.order_by("-pub_date")[:5]
    # output = "<br/> ".join([q.question_text for q in latest_question_list])
    # return HttpResponse(output)
    # this is using temp from polls/index.html
    latest_question_list = Question.objects.order_by("-pub_date")[:5]
    context = {"latest_question_list": latest_question_list}
    return render(request, "polls/index.html", context)
    # return HttpResponse(template.render(context, request))


def detail(request, question_id):
    # return HttpResponse("You're looking at question %s." % question_id)
    # try:
    #     question = Question.objects.get(pk=question_id)
    # except Question.DoesNotExist:
    #     raise Http404("Question does not exist")
    # return render(request, "polls/detail.html", {"question": question})
    question = get_object_or_404(Question, pk=question_id)
    return render(request, "polls/detail.html", {"question": question})


def results(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    return render(request, "polls/results.html", {"question": question})
    # response = "You're looking at the results of question %s."
    # return HttpResponse(response % question_id)


def vote(request, question_id):
    question = get_object_or_404(Question, pk=question_id)
    try:
        selected_choice = question.choice_set.get(pk=request.POST["choice"])
    except (KeyError, Choice.DoesNotExist):
        # Redisplay the question voting form.
        return render(
            request,
            "polls/detail.html",
            {
                "question": question,
                "error_message": "You didn't select a choice.",
            },
        )
    else:
        selected_choice.votes += 1
        selected_choice.save()
        # Always return an HttpResponseRedirect after successfully dealing
        # with POST data. This prevents data from being posted twice if a
        # user hits the Back button.
        return HttpResponseRedirect(reverse("polls:results", args=(question.id,)))
    # return HttpResponse("You're voting on question %s." % question_id)


def get_cities_weather(request):
    # Retrieve user input from the request
    weather_condition = request.GET.get('weather_condition', 'Clear')
    out_city = []

    # importing all the cities from googlesheet
    cities = googlesheet()

    if cities == [] or cities is None:
        # No cities found becasue the connection to google sheet is not correction
        return JsonResponse({'message': 'No cities found for the specified weather condition.'})

    # Retrieve additional weather information for each city from the OpenWeatherMap API
    for city in cities:
        url = f'https://api.openweathermap.org/data/2.5/weather?q={city[0]},{city[1]},US&units=imperial&appid=d09a5b8a5a1764e7ae30c5ff46c2a6f8'
        response = requests.get(url)
        data = response.json()

        # Extract temperature and wind speed from the API response
        try:
            if weather_condition.title() not in [x['main'] for x in data['weather']]:
                continue
            d = {
                'City': city[0],
                'state': city[1],
                'temperature': int(data['main']['temp']),
                'wind_speed': data['wind']['speed'],
                'weather': data['weather']
            }
        except KeyError as err:
            continue
        out_city.append(d)

    return JsonResponse({'cities': out_city})
