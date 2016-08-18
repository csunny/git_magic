from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from models import Poem
from serializers import PoemSerializer


# Create your views here.


class PoemListView(APIView):
    def get(self, request, format=None):
        poem = Poem.objects.all()
        serializer = PoemSerializer(poem, many=True)
        return Response(serializer.data)

    def post(self, request, format=None):
        serialzier = PoemSerializer(data=request.data, many=True)
        if serialzier.is_valid():
            serialzier.save()
            return Response(serialzier.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialzier.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def poem_detail(request, id):
    pass
