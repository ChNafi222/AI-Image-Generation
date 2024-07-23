import React from 'react'
import {surpriseMePrompts} from '../contant'

export function getRandomPrompt(prompt){
    const randomIndex = Math.floor(Math.random()*surpriseMePrompts.length);

    const randomPrompt = surpriseMePrompts[randomIndex];

    if(randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;

}

