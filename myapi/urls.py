from django.urls import path, include
from .views import AuthorViewSet, CardViewSet
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'authors', AuthorViewSet)
router.register(r'cards', CardViewSet)

urlpatterns = [
    path('', include(router.urls)),
    # path('cards/', CardViewSet.as_view(), name='cards')
]
