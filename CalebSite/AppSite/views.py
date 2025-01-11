from django.shortcuts import render
from . import home_logic,nhknews_logic

# Create your views here.
# Create your views here.
def home(request):
    return render(request, "home.html", home_logic.main())

def experience(request):
    return render(request, "experience.html")

def nhknews(request):
    return render(request, "nhknews_scrape.html", nhknews_logic.runner('jp'))