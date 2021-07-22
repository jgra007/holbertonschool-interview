#!/usr/bin/python3
"""
You have n number of locked boxes in front of you.
Each box is numbered sequentially from 0 to n - 1
and each box may contain keys to the other boxes.
"""


def canUnlockAll(boxes):
    if not boxes:
        return False
    if len(boxes) == 0:
        return False
    keys = []
    keys.append(0)
    for key in keys:
        new_keys = boxes[key]
        for new_key in new_keys:
            if new_key not in keys and new_key < len(boxes):
                keys.append(new_key)
    if len(keys) == len(boxes):
        return True
    return False
