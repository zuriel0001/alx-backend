#!/usr/bin/env python3
"""Basic caching module.
"""
from base_caching import BaseCaching


class BasicCache(BaseCaching):
    """
    Represents an object that allows storing and
    retrieving items in a dictionary
    """
    def put(self, key, item):
        """
        Method to add an item in the cache.
        """
        if key is None or item is None:
            return
        self.cache_data[key] = item

    def get(self, key):
        """
        Returns an item by key.
        """
        return (self.cache_data.get(key, None))
