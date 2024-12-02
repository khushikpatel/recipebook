from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('login/',views.UserLogin.as_view(),  name='user-login'),
    path("sign-up/",views.UserRegisterView.as_view(),name="user-sign-up"),
    path('get-recipe/', views.RecipeGETView.as_view(), name='get-recipe'),
    path('create-recipe/', views.RecipeView.as_view(), name='recipe-list'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)