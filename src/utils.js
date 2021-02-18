import React from 'react';

export default function mutableCopy(object) {
  return JSON.parse(JSON.stringify(object));
}