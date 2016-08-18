#!usr/bin/env python
# -*- coding:utf-8 -*-
"""
@ author = magic
"""
from rest_framework import serializers
from .models import Poem


class PoemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Poem
        fields = ['author', 'title', 'type']
