from django.urls import path

from . import views

urlpatterns = [
    path("", views.experience, name="experience"),
    path("home",views.home,name="home"),
    path("experience", views.experience, name="experience"),
    path("nhknews", views.nhknews, name='nhknews'),
]