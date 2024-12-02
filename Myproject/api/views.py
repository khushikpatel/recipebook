from rest_framework import viewsets
from .models import User
from .serializers import UserSerializer
# from .serializers import LoanSerializer
# from .serializers import FDSerializer
# from .serializers import TransactionSerializer
from rest_framework.response import Response
from rest_framework import status,viewsets
from api.serializers import *
from rest_framework import views
from django.views.decorators.csrf import csrf_exempt
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.permissions import IsAuthenticated

class UserViewSet(views.APIView):
    def get(self, request, id=None, format=None):
        if id is not None:
            queryset=User.objects.filter(id=id)
            serializer_class=UserSerializer(queryset,many=True)
            return Response({'data':serializer_class.data},status=status.HTTP_200_OK)
        queryset = User.objects.all()
        serializer_class = UserSerializer(queryset,many=True)
        return Response({'data':serializer_class.data},status=status.HTTP_200_OK)

from django.shortcuts import render
from api.models import User
from rest_framework import views
from api import serializers
from rest_framework.response import Response
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import status
from api.serializers import *
from rest_framework.permissions import IsAuthenticated
from api.custom_permission import *
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken

def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)
    # Add custom claims to the access token
    refresh['is_creator'] = user.is_creator
    refresh['is_customer'] = user.is_customer
    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }


class UserLogin(views.APIView):
    def post(self, request, format=None):
        serializer = UserloginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                token = get_tokens_for_user(user)
                return Response({'token':token,'data':'Login success'}, status=status.HTTP_200_OK)
            else:
                return Response({'errors':{'non_field_errors':['username or password not a valid']}},
                status=status.HTTP_404_NOT_FOUND)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

from .serializers import UserregisterSerializer

class UserRegisterView(views.APIView):
    def post(self, request, format=None):
        serializer = UserregisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.save()
            return Response({'Data':'User Registred'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    
class RecipeView(views.APIView):

    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self, request):
        serializer = RecipySerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.validated_data['creator'] = request.user
            instance = serializer.save()
            return Response({'data': f"'{instance.recipe_name}' project created successfully"}, status=status.HTTP_201_CREATED)
        return Response({"error": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)


class RecipeGETView(views.APIView):
    
    def get(self, request, id=None, format=None):
        if id is not None:
            query = Recipe.objects.filter(id=id)
            serializer = RecipySerializer(query, many=True)
            return Response({'data':serializer.data}, status=status.HTTP_200_OK)
        query = Recipe.objects.all()
        serializer = RecipySerializer(query, many=True)
        return Response({'data':serializer.data}, status=status.HTTP_200_OK)