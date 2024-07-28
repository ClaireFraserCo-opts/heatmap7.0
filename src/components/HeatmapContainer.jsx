// src/components/HeatmapContainer.jsx

import React, { useEffect, useState, useRef } from 'react';
// import FileDropdown from './FileDropdown';
import HeatmapComponent from './HeatmapComponent';
// import { loadDataForHeatmap } from '../utils/dataProcessing'; // Ensure this function is correctly imported

const data = {
  "utterances": [
     {
       "index": 0,
       "speaker": "A",
       "text": "I don't, uh, know from which angle to approach this thing. Um, I feel about it like it was all just one big ball. It doesn't matter much one to me which way I try to go at it.",
       "start": 730,
       "end": 18160,
       "confidence": 0.9296676923076924,
       "word_count": 39,
       "frequent_wc_base": 2852,
       "score": 247,
       "density": 6.333333333333333,
       "percentile": 100.0
     },
     {
       "index": 1,
       "speaker": "B",
       "text": "There's something to get into. Is that it?",
       "start": 18530,
       "end": 22158,
       "confidence": 0.9625237500000001,
       "word_count": 8,
       "frequent_wc_base": 2852,
       "score": 64,
       "density": 8.0,
       "percentile": 100.0
     },
     {
       "index": 2,
       "speaker": "A",
       "text": "Yeah. There's something I'd like to talk about.",
       "start": 22244,
       "end": 24880,
       "confidence": 0.889415,
       "word_count": 8,
       "frequent_wc_base": 2852,
       "score": 86,
       "density": 10.75,
       "percentile": 100.0
     },
     {
       "index": 3,
       "speaker": "B",
       "text": "You don't know how to begin. But in a way, at any point.",
       "start": 25370,
       "end": 31080,
       "confidence": 0.9668907692307692,
       "word_count": 13,
       "frequent_wc_base": 2852,
       "score": 42,
       "density": 3.230769230769231,
       "percentile": 0
     },
     {
       "index": 4,
       "speaker": "A",
       "text": "Seems as good as any other.",
       "start": 31610,
       "end": 33462,
       "confidence": 0.9600866666666666,
       "word_count": 6,
       "frequent_wc_base": 2852,
       "score": 20,
       "density": 3.3333333333333335,
       "percentile": 0
     },
     {
       "index": 5,
       "speaker": "B",
       "text": "It's more a question of beginning than where to begin. Is that what you're saying?",
       "start": 33596,
       "end": 39546,
       "confidence": 0.9319253333333334,
       "word_count": 15,
       "frequent_wc_base": 2852,
       "score": 3,
       "density": 0.2,
       "percentile": 0
     },
     {
       "index": 6,
       "speaker": "A",
       "text": "Yeah. I feel about it as if it were, um. I don't have any systematic set of feelings about it. And at the same time, I would like to work some out. And I would like to have you understand what I'm talking about at the same time. And if I could make an outline or some sort of thing, it would be easier. But if I spend my time doing that, I won't say anything.",
       "start": 39728,
       "end": 64320,
       "confidence": 0.9596869736842104,
       "word_count": 76,
       "frequent_wc_base": 2852,
       "score": 327,
       "density": 4.302631578947368,
       "percentile": 0
     },
     {
       "index": 7,
       "speaker": "B",
       "text": "Something you got on your mind. And it's in the shape of a.",
       "start": 65030,
       "end": 70866,
       "confidence": 0.9228323076923078,
       "word_count": 13,
       "frequent_wc_base": 2852,
       "score": 45,
       "density": 3.4615384615384617,
       "percentile": 0
     },
     {
       "index": 8,
       "speaker": "A",
       "text": "Round, uncut ball of yarn or something like that. Or more like a ball of string that grandma saves and she doesn't tie the ends together. Uh. Um.",
       "start": 70888,
       "end": 84100,
       "confidence": 0.9369203571428572,
       "word_count": 28,
       "frequent_wc_base": 2852,
       "score": 153,
       "density": 5.464285714285714,
       "percentile": 40.0
     },
     {
       "index": 9,
       "speaker": "B",
       "text": "So how to go about putting this out?",
       "start": 84490,
       "end": 88330,
       "confidence": 0.98485,
       "word_count": 8,
       "frequent_wc_base": 2852,
       "score": 13,
       "density": 1.625,
       "percentile": 0
     },
     {
       "index": 10,
       "speaker": "A",
       "text": "Yeah, I can pull off one string at a time.",
       "start": 88480,
       "end": 91020,
       "confidence": 0.9943479999999998,
       "word_count": 10,
       "frequent_wc_base": 2852,
       "score": 32,
       "density": 3.2,
       "percentile": 0
     },
     {
       "index": 11,
       "speaker": "C",
       "text": "It.",
       "start": 95630,
       "end": 96090,
       "confidence": 0.44,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 12,
       "speaker": "A",
       "text": "Well, this summary of it. I'm not happy with the way I get along with my boss. M. I don't see any great prospects of doing much better in getting along with him than I do right now. And, um. I feel that the reason we don't get along is because he is one sort and I am another sort. And I don't really have any firm belief that either of us are going to change a lot. And I further feel that it would require certain amount of concentration on my part. To treat him in the only way that I know would make him feel better about me. And, um. I'm trying to say this that I don't believe my, uh. I'm trying to say that I am not entirely unwilling to make an effort to, uh. On my terms, kiss his butt. But, um. From the practical viewpoint, it's cut the last one and say I think it's impractical. Because I can't remember to ever do it enough, consistently enough. Uh. I don't naturally feel that way. I'm trying to make the strong point that I might be willing to try it. But I don't think I can do it as sufficiently well.",
       "start": 96160,
       "end": 220830,
       "confidence": 0.9638227184466012,
       "word_count": 206,
       "frequent_wc_base": 2852,
       "score": 765,
       "density": 3.7135922330097086,
       "percentile": 0
     },
     {
       "index": 13,
       "speaker": "B",
       "text": "You really feel kind of hopeless about this difference between you and him. Um, you'd have to really make an effort to be a different kind of person. Or extend yourself a lot to make it work. And you'd kind of like to save the situation or something like that. But by God, it seems so foreign to you to have to behave the way you'd have to behave. That you really doubt whether you could carry it off. Even if you do.",
       "start": 221520,
       "end": 255576,
       "confidence": 0.9324030120481925,
       "word_count": 83,
       "frequent_wc_base": 2852,
       "score": 454,
       "density": 5.469879518072289,
       "percentile": 59.99999999999999
     },
     {
       "index": 14,
       "speaker": "A",
       "text": "Even if I'm willing to, uh, do what I call be to some extent false to what I believe in. Just for the economic purposes of, um, uh, saving the job or the psychological purpose I have. Unless friction. Uh, I'm not sure that it seems to me impractical that I could do it. I would forget. And, uh, in certain cases I would be a little too angry to make myself do it at the proper moment. Uh, I could walk around, tell, um, him what a good fellow he is. Uh, as long as I wasn't too mad at that time at him. But maybe at the time he needs to be told he's a good fellow. I'm, uh, pretty well peeved and can't make myself say it. Also, saying it 15 minutes later probably wouldn't count for very much.",
       "start": 255758,
       "end": 304650,
       "confidence": 0.9341711267605629,
       "word_count": 142,
       "frequent_wc_base": 2852,
       "score": 404,
       "density": 2.8450704225352115,
       "percentile": 0
     },
     {
       "index": 15,
       "speaker": "B",
       "text": "Seems right now. As if you're saying, I just doubt that I could put on a convincing act.",
       "start": 309340,
       "end": 318268,
       "confidence": 0.9279644444444445,
       "word_count": 18,
       "frequent_wc_base": 2852,
       "score": 47,
       "density": 2.611111111111111,
       "percentile": 0
     },
     {
       "index": 16,
       "speaker": "A",
       "text": "Yeah, that's a good way to say it. I know I couldn't put on 100% convincing one. But I don't even know if I could even put on a, ah, convincing enough one. I mean, I know I wouldn't fool hardly anybody but him. But, uh, I don't even know if I could fool him. Because I wouldn't remember. I have a tendency to consider that I have a single track mind, sort of, in that what I'm doing at the time is what I'm doing with a few brains I've got. And then I would forget about my campaign to be good to him. Or, um, kiss his butt or however you want to term it.",
       "start": 318434,
       "end": 362410,
       "confidence": 0.9523819658119654,
       "word_count": 117,
       "frequent_wc_base": 2852,
       "score": 481,
       "density": 4.111111111111111,
       "percentile": 0
     },
     {
       "index": 17,
       "speaker": "B",
       "text": "You kind of have to cater to him.",
       "start": 363500,
       "end": 365016,
       "confidence": 0.9606325,
       "word_count": 8,
       "frequent_wc_base": 2852,
       "score": 33,
       "density": 4.125,
       "percentile": 0
     },
     {
       "index": 18,
       "speaker": "A",
       "text": "Is that what you're saying?",
       "start": 365038,
       "end": 366296,
       "confidence": 0.9971920000000001,
       "word_count": 5,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 19,
       "speaker": "B",
       "text": "And also, I guess you're saying you'd really have to be a different kind of person than you feel yourself to be.",
       "start": 366478,
       "end": 372972,
       "confidence": 0.958745909090909,
       "word_count": 22,
       "frequent_wc_base": 2852,
       "score": 114,
       "density": 5.181818181818182,
       "percentile": 40.0
     },
     {
       "index": 20,
       "speaker": "A",
       "text": "I'd have to be false to what I feel myself to be. Oh, false to. I don't like that phrase. But I'd have to be different than I ordinarily would be around most people that I like. Maybe around all people that I like. But certainly be quite unrelaxed. And, uh, I would have to make the effort. I'm not even 100% sure I'm willing to make too wholehearted an effort.",
       "start": 373106,
       "end": 407000,
       "confidence": 0.9057895774647889,
       "word_count": 71,
       "frequent_wc_base": 2852,
       "score": 356,
       "density": 5.014084507042254,
       "percentile": 20.0
     },
     {
       "index": 21,
       "speaker": "B",
       "text": "Um, when you stop to think about this, you're not positive that you do want to go sort of strain yourself.",
       "start": 408500,
       "end": 418110,
       "confidence": 0.9629742857142857,
       "word_count": 21,
       "frequent_wc_base": 2852,
       "score": 68,
       "density": 3.238095238095238,
       "percentile": 0
     },
     {
       "index": 22,
       "speaker": "A",
       "text": "To make him feel better about me. And, um. But I'm just uncertain about that. But I'm more certain that I can't anyway because it isn't will I be good to him. The thing that's going to depend on doing what you term cater to him, which is the best phrase I can think of, would have to be done, say, 6 hours out of eight, four days out of five, uh, most of for months, month after month after month. It wouldn't be a thing that I could get them sold on me and then go back and be myself, uh, as I feel myself to be. M. It would be a thing I would have to keep up because as soon as I would be like I feel myself to be, he would not, uh, like me quite so well and be approximately like he is now. And, um, same time, I don't feel very ambitious about going after another job. I don't like doing that very much. I mean, I very much don't like it.",
       "start": 419360,
       "end": 501190,
       "confidence": 0.9582161797752807,
       "word_count": 178,
       "frequent_wc_base": 2852,
       "score": 810,
       "density": 4.550561797752809,
       "percentile": 0
     },
     {
       "index": 23,
       "speaker": "B",
       "text": "Um, you really sound now as if you're saying you are up against the choice of living with him comfortably.",
       "start": 501820,
       "end": 515740,
       "confidence": 0.9769285000000002,
       "word_count": 20,
       "frequent_wc_base": 2852,
       "score": 43,
       "density": 2.15,
       "percentile": 0
     },
     {
       "index": 24,
       "speaker": "A",
       "text": "Which.",
       "start": 517680,
       "end": 518044,
       "confidence": 0.99996,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 25,
       "speaker": "B",
       "text": "Means being something you don't really want to be or like to be, or looking for another job, which, by God, you certainly don't want to have to go through.",
       "start": 518082,
       "end": 529490,
       "confidence": 0.9847843333333334,
       "word_count": 30,
       "frequent_wc_base": 2852,
       "score": 159,
       "density": 5.3,
       "percentile": 40.0
     },
     {
       "index": 26,
       "speaker": "A",
       "text": "That's right. And I'm saying further, this is true. Um, I'm either going to have to look for another job or start to cater to him, or I won't be given the choice. He'll be having me look for it.",
       "start": 531060,
       "end": 547830,
       "confidence": 0.9541394999999999,
       "word_count": 40,
       "frequent_wc_base": 2852,
       "score": 83,
       "density": 2.075,
       "percentile": 0
     },
     {
       "index": 27,
       "speaker": "B",
       "text": "This is being forced on you.",
       "start": 549640,
       "end": 551830,
       "confidence": 0.9176333333333334,
       "word_count": 6,
       "frequent_wc_base": 2852,
       "score": 1,
       "density": 0.16666666666666666,
       "percentile": 0
     },
     {
       "index": 28,
       "speaker": "A",
       "text": "Yeah, well, I'm not sure he knows that even, but I know it. I bet all the money I got on it.",
       "start": 552840,
       "end": 559530,
       "confidence": 0.9284904545454545,
       "word_count": 22,
       "frequent_wc_base": 2852,
       "score": 77,
       "density": 3.5,
       "percentile": 0
     },
     {
       "index": 29,
       "speaker": "B",
       "text": "I get that you're saying I can see this coming, it's building up.",
       "start": 560380,
       "end": 565020,
       "confidence": 0.9539415384615387,
       "word_count": 13,
       "frequent_wc_base": 2852,
       "score": 77,
       "density": 5.923076923076923,
       "percentile": 80.0
     },
     {
       "index": 30,
       "speaker": "A",
       "text": "Uh uh. Remember I watched the other foreman get tired for day after day, month after month. And I see it, and it's not the same because I'm not the same, but basically it's the same.",
       "start": 565020,
       "end": 577560,
       "confidence": 0.9418638888888888,
       "word_count": 36,
       "frequent_wc_base": 2852,
       "score": 176,
       "density": 4.888888888888889,
       "percentile": 20.0
     },
     {
       "index": 31,
       "speaker": "B",
       "text": "You can see this shaping up for yourself.",
       "start": 577650,
       "end": 579970,
       "confidence": 0.938695,
       "word_count": 8,
       "frequent_wc_base": 2852,
       "score": 19,
       "density": 2.375,
       "percentile": 0
     },
     {
       "index": 32,
       "speaker": "A",
       "text": "Mhm. That, uh, I would have to act different than I act now if I want to stay there and work with him. And to me there's a further thing. Um. It isn't fair to say that he's a type exactly, but he is a good deal like a fellow I did work for, for a long time. Only he is, from my viewpoint, a better man than that one, a more adjusted man. The other fellow was just a caricature and exaggeration of this fellow. But, uh, this fellow is quite a bit of the same in many ways. And to me, they are both types of this half sister of mine that raised me, and she is an exaggeration of all of them. Now, uh, here's the thing that really, I am practically superstitious about. How do I get in contact with these kind of people? I hope to God the world isn't filled with them, or how much. On the contrary, that's one, uh, way of looking at it. On the other way, how much of this is a mirror of what I do to them that makes them treat me this way? What's the matter with me in situations with people like this?",
       "start": 580200,
       "end": 674220,
       "confidence": 0.9568735511862709,
       "word_count": 207,
       "frequent_wc_base": 2852,
       "score": 581,
       "density": 2.8067632850241546,
       "percentile": 0
     },
     {
       "index": 33,
       "speaker": "B",
       "text": "You're kind of saying you have been through this kind of relation before.",
       "start": 674370,
       "end": 679136,
       "confidence": 0.9327292307692309,
       "word_count": 13,
       "frequent_wc_base": 2852,
       "score": 84,
       "density": 6.461538461538462,
       "percentile": 100.0
     },
     {
       "index": 34,
       "speaker": "A",
       "text": "To me, this is the only kind of relation I have ever lived with. Power figures.",
       "start": 679318,
       "end": 685600,
       "confidence": 0.9692825,
       "word_count": 16,
       "frequent_wc_base": 2852,
       "score": 46,
       "density": 2.875,
       "percentile": 0
     },
     {
       "index": 35,
       "speaker": "B",
       "text": "And either somehow you've gotten mixed up with power figures of, uh, this kind.",
       "start": 686740,
       "end": 695828,
       "confidence": 0.8880007142857143,
       "word_count": 14,
       "frequent_wc_base": 2852,
       "score": 22,
       "density": 1.5714285714285714,
       "percentile": 0
     },
     {
       "index": 36,
       "speaker": "A",
       "text": "Or I see them all as if they were this kind.",
       "start": 695994,
       "end": 700420,
       "confidence": 0.9625072727272728,
       "word_count": 11,
       "frequent_wc_base": 2852,
       "score": 18,
       "density": 1.6363636363636365,
       "percentile": 0
     },
     {
       "index": 37,
       "speaker": "B",
       "text": "What the hell about you makes them take this?",
       "start": 700490,
       "end": 705770,
       "confidence": 0.947702222222222,
       "word_count": 9,
       "frequent_wc_base": 2852,
       "score": 12,
       "density": 1.3333333333333333,
       "percentile": 0
     },
     {
       "index": 38,
       "speaker": "A",
       "text": "Is it the way I treat them, that every power figure I will be around? Because remember, in the back of our mind here, we're looking for another job. I'm going to work for somebody else.",
       "start": 706780,
       "end": 715470,
       "confidence": 0.9940861111111112,
       "word_count": 36,
       "frequent_wc_base": 2852,
       "score": 111,
       "density": 3.0833333333333335,
       "percentile": 0
     },
     {
       "index": 39,
       "speaker": "D",
       "text": "From here on, your task is to respond to the client. After the client has made a response, there will be a 22nd interval in which you can make your response. After 20 seconds, you will hear the counselor's actual response, followed by a new client response, to which you will in turn respond. You will then hear the counselor's response. Keep on in this fashion until the hour is over or until you hear instructions on the tape.",
       "start": 718880,
       "end": 747300,
       "confidence": 0.9541977215189873,
       "word_count": 79,
       "frequent_wc_base": 2852,
       "score": 56,
       "density": 0.7088607594936709,
       "percentile": 0
     },
     {
       "index": 40,
       "speaker": "A",
       "text": "Uh. I have fantasies of being a billionaire, maybe. But along with that fantasy is the knowledge I'll be working for somebody, even if it's, uh, the public or something. Uh, I don't see that I'll ever get to the point of where I don't have a whole lot of superiors around.",
       "start": 751020,
       "end": 770730,
       "confidence": 0.9587348076923079,
       "word_count": 52,
       "frequent_wc_base": 2852,
       "score": 123,
       "density": 2.3653846153846154,
       "percentile": 0
     },
     {
       "index": 41,
       "speaker": "C",
       "text": "It.",
       "start": 789240,
       "end": 789990,
       "confidence": 0.44,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 42,
       "speaker": "B",
       "text": "I've m got big ideas, but I expect to be under somebody. Is that what you're saying?",
       "start": 792920,
       "end": 798596,
       "confidence": 0.9542435294117647,
       "word_count": 17,
       "frequent_wc_base": 2852,
       "score": 20,
       "density": 1.1764705882352942,
       "percentile": 0
     },
     {
       "index": 43,
       "speaker": "A",
       "text": "Yeah.",
       "start": 798618,
       "end": 799188,
       "confidence": 0.97,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 44,
       "speaker": "B",
       "text": "So what is there in me that brings me back?",
       "start": 799354,
       "end": 806056,
       "confidence": 0.877543,
       "word_count": 10,
       "frequent_wc_base": 2852,
       "score": 3,
       "density": 0.3,
       "percentile": 0
     },
     {
       "index": 45,
       "speaker": "A",
       "text": "Yeah. This problem needs a solution, because moving from this job to that job is not going to, um. Uh. If my superstition is true, that I always end up with people like this because of any one of the four or five reasons I'm trying to explain, I got to do something about learning to handle me.",
       "start": 806078,
       "end": 826056,
       "confidence": 0.9789920689655169,
       "word_count": 58,
       "frequent_wc_base": 2852,
       "score": 252,
       "density": 4.344827586206897,
       "percentile": 0
     },
     {
       "index": 46,
       "speaker": "C",
       "text": "It.",
       "start": 851740,
       "end": 852200,
       "confidence": 0.67,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 47,
       "speaker": "A",
       "text": "Or they.",
       "start": 852270,
       "end": 853210,
       "confidence": 0.87174,
       "word_count": 2,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 48,
       "speaker": "B",
       "text": "Because you almost feel it's some unkind fate that brings you together with this kind of person. And you've got to find some way, if this is going to happen to you again and again, you've got to find some way of relating to these.",
       "start": 853660,
       "end": 873244,
       "confidence": 0.9374655555555553,
       "word_count": 45,
       "frequent_wc_base": 2852,
       "score": 155,
       "density": 3.4444444444444446,
       "percentile": 0
     },
     {
       "index": 49,
       "speaker": "A",
       "text": "People in an agreeable way. Now, um, here's the thing. Let's say a person is a whole lot of areas, and somehow so am I. Ah, um, some areas I'm, I feel threatened in and some things I am interested in and uh, some attitudes I have and all of this. So when I see any person, I don't believe I see anywhere near all of them do I just somehow see in whoever I meet that is in a power position over me enough common attributes that I single out and call a type? In many ways, my half sister is not like the man I used to work for, and this fellow is not like the man I used to work for. Now, is there something about me that I just see certain things in those people I don't like or that antagonize me or that, uh, cause me to act in a pattern toward them that they aren't going to like? And, um, because those people do act toward me quite a bit alike.",
       "start": 873282,
       "end": 961880,
       "confidence": 0.9374982485875702,
       "word_count": 177,
       "frequent_wc_base": 2852,
       "score": 745,
       "density": 4.209039548022599,
       "percentile": 0
     },
     {
       "index": 50,
       "speaker": "C",
       "text": "M it.",
       "start": 967740,
       "end": 977010,
       "confidence": 0.9199999999999999,
       "word_count": 2,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 51,
       "speaker": "B",
       "text": "Are you saying here you don't know the whole person?",
       "start": 987060,
       "end": 990470,
       "confidence": 0.9484790000000001,
       "word_count": 10,
       "frequent_wc_base": 2852,
       "score": 71,
       "density": 7.1,
       "percentile": 100.0
     },
     {
       "index": 52,
       "speaker": "A",
       "text": "No.",
       "start": 990920,
       "end": 991670,
       "confidence": 0.63,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 53,
       "speaker": "B",
       "text": "And is it that you're just singling out parts of these people that are like your sister in law was in this exaggerated way, or your other boss? Uh, or this boss, do you just somehow appeal to or perceive or stimulate or react or something like these parts that antagonize so much?",
       "start": 993400,
       "end": 1022590,
       "confidence": 0.9497156603773583,
       "word_count": 53,
       "frequent_wc_base": 2852,
       "score": 219,
       "density": 4.132075471698113,
       "percentile": 0
     },
     {
       "index": 54,
       "speaker": "A",
       "text": "Yeah, um, I mean, that's a good question because, um, it three people do treat a lot of other people exactly like they treat me. But there's a further thing from my viewpoint, of all the ways that, uh, supposing my boss were reacting with you over a long period of time with only the sort of things register with me that I hate about him in his actions towards you. So again, maybe all this is funneled through my perceptions anyway, which may be distorted or certainly are limited.",
       "start": 1023040,
       "end": 1066920,
       "confidence": 0.938443777777778,
       "word_count": 90,
       "frequent_wc_base": 2852,
       "score": 330,
       "density": 3.6666666666666665,
       "percentile": 0
     },
     {
       "index": 55,
       "speaker": "C",
       "text": "It.",
       "start": 1076260,
       "end": 1077010,
       "confidence": 0.6,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 56,
       "speaker": "B",
       "text": "Again, are you just seeing this one side of these people and that the side that you clash so with?",
       "start": 1088500,
       "end": 1096660,
       "confidence": 0.9680465,
       "word_count": 20,
       "frequent_wc_base": 2852,
       "score": 93,
       "density": 4.65,
       "percentile": 0
     },
     {
       "index": 57,
       "speaker": "A",
       "text": "Yeah.",
       "start": 1096810,
       "end": 1097510,
       "confidence": 0.55,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 58,
       "speaker": "B",
       "text": "You kind of, I think, are saying that maybe this is what you're doing.",
       "start": 1098360,
       "end": 1105800,
       "confidence": 0.9648857142857142,
       "word_count": 14,
       "frequent_wc_base": 2852,
       "score": 62,
       "density": 4.428571428571429,
       "percentile": 0
     },
     {
       "index": 59,
       "speaker": "A",
       "text": "Yeah, it could be me. It could be that these people also have to me a likable side, each one of the three of those people. And that likable side is very similar. Is that how I get tangled up with them in the first place?",
       "start": 1105950,
       "end": 1133410,
       "confidence": 0.9690002173913044,
       "word_count": 46,
       "frequent_wc_base": 2852,
       "score": 189,
       "density": 4.108695652173913,
       "percentile": 0
     },
     {
       "index": 60,
       "speaker": "C",
       "text": "Mhm. You.",
       "start": 1136000,
       "end": 1152490,
       "confidence": 0.6954597353935241,
       "word_count": 2,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 61,
       "speaker": "B",
       "text": "There is more to these people than.",
       "start": 1156380,
       "end": 1158552,
       "confidence": 0.9999942857142857,
       "word_count": 7,
       "frequent_wc_base": 2852,
       "score": 50,
       "density": 7.142857142857143,
       "percentile": 100.0
     },
     {
       "index": 62,
       "speaker": "A",
       "text": "Just the part of my don't like.",
       "start": 1158606,
       "end": 1161610,
       "confidence": 0.8450814285714287,
       "word_count": 7,
       "frequent_wc_base": 2852,
       "score": 4,
       "density": 0.5714285714285714,
       "percentile": 0
     },
     {
       "index": 63,
       "speaker": "B",
       "text": "There's also any in each of these three there's something that attracts you that.",
       "start": 1162060,
       "end": 1168604,
       "confidence": 0.8772328571428573,
       "word_count": 14,
       "frequent_wc_base": 2852,
       "score": 42,
       "density": 3.0,
       "percentile": 0
     },
     {
       "index": 64,
       "speaker": "A",
       "text": "I like and that other people like. These three people are liked by, uh, some people. I don't think any of the three of them are loved at all, but they are liked, uh, by some people particularly. They are likable people to people who don't know them very well. Uh, it is to me quite amusing to watch new employees come and come and come to the place and think, this is the greatest boss on earth, and leave swearing to themselves. And it is quite a repeated pattern. But is it because I would like to leave swearing to myself that I watch those kind of leave swearing to themselves and they register and I count those and I don't count the ones that just, uh, don't show up for work someday and disappear off the payroll and I forget they were ever there. And uh, I admit that my statistics aren't scientific at all here and that, uh, um, could be it again. But, uh. It is important, I think, for me to notice that there is a likable part about each of these three people. It's not true to divide each one of them in half and say half of them is likable, half of them isn't. But there is a likable part to each of them. And to me, that's similar in the three tooth.",
       "start": 1168642,
       "end": 1261820,
       "confidence": 0.9534125217391302,
       "word_count": 230,
       "frequent_wc_base": 2852,
       "score": 805,
       "density": 3.5,
       "percentile": 0
     },
     {
       "index": 65,
       "speaker": "C",
       "text": "Mhm.",
       "start": 1261820,
       "end": 1263370,
       "confidence": 0.9987086653709412,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 66,
       "speaker": "B",
       "text": "Noting it. But there is something appealing about these, there's likable something. And again, this somehow fits all three of these people. They are a cluster pattern. You really seem to be saying there seems some relation appears, some connection or pattern appears to you.",
       "start": 1278272,
       "end": 1311670,
       "confidence": 0.8742608888888888,
       "word_count": 45,
       "frequent_wc_base": 2852,
       "score": 116,
       "density": 2.577777777777778,
       "percentile": 0
     },
     {
       "index": 67,
       "speaker": "A",
       "text": "Yeah. Um. Well, let's start up the line. There's my half sister. My mother worked, uh, as much as I was a kid. She ran the house. She was my real boss. She was my mother in the sociological sense. I mean, she got me off to school. She ironed my shirt, she washed my ears. Um, she cooked the lunch when I came home to lunch. And my mother was there for the time I got home at 04:00. Uh, and all summer long when you're home, you don't go to school. She was the mother. My mother went to work 07:00 in the morning. And uh, she came home, she generally laid down for a nap and then had dinner. And um, um, there was an hour or two contact with her, maybe in the evening. And as I got older, though, I was out eating and so forth. So really my half sister was my mother in sense of amount of time spent with quantity of orders I took from her, uh, uh, things that she did for me most of the things most mothers do for kids. Uh, she did. She packed lunches if we carried lunches. And, um, blew our noses if they needed blowing. And all of this sort of thing. Yet, to me, she is the epitome of this type I'm talking about. I mean, I have met a lot of them. I see them. Besides, they're not only people I work for. I see them around various other places. And, um, I wish you'd read the Kane mutiny. Because Captain Quig, is it. And, um, she is both the most likable and the most treacherous. And the nastiest of the whole lot. And yet I see her in a lot of people. Say, this sounds awful freudian. Give me a closed pin. Uh, the thing here, before I forget to mention. Is, uh. At least the series of bosses I've got. They are less so as I get older. Maybe I'm getting better. That's kind of besides the full it.",
       "start": 1314600,
       "end": 1454550,
       "confidence": 0.9403053448275868,
       "word_count": 348,
       "frequent_wc_base": 2852,
       "score": 679,
       "density": 1.9511494252873562,
       "percentile": 0
     },
     {
       "index": 68,
       "speaker": "B",
       "text": "Just to point out there seems to be a diminishing intent city of these people.",
       "start": 1474920,
       "end": 1480750,
       "confidence": 0.7923986666666668,
       "word_count": 15,
       "frequent_wc_base": 2852,
       "score": 17,
       "density": 1.1333333333333333,
       "percentile": 0
     },
     {
       "index": 69,
       "speaker": "A",
       "text": "All right. Um, but to the cheat. To me, really is the word. And, um, then let's see. Well, there was a small interlude. I worked for her husband. Actually, you can't count him. Um, he's not like any of them. He's no better than any of them, but he's not like them. Um, to me, he's not the type. Interestingly enough, I never felt anything but contempt for him. Because where did I get all my attitudes toward him? From her. And she hated her guts. And to him, he was a worthless drunkard and poor businessman and all of that. And I was firmly entrenched on the side of the right. Being the wrong woman, my half sister. Even though I did work for him. And at the time, he was not importantly enough a power figure as far as I was concerned. Uh, indirectly, I think I was almost as much boss of his business as he was. Because if he got too smart, I'd get back at him through my half sister. I don't think he could have fired me, to put it that way. And, uh, I don't believe he could. I never thought of that till just now. But maybe that's why, to me, he doesn't fit these tights. Or this tight I'm talking about.",
       "start": 1483360,
       "end": 1565350,
       "confidence": 0.9308174660633486,
       "word_count": 221,
       "frequent_wc_base": 2852,
       "score": 524,
       "density": 2.3710407239819005,
       "percentile": 0
     },
     {
       "index": 70,
       "speaker": "C",
       "text": "It.",
       "start": 1581700,
       "end": 1582450,
       "confidence": 0.9,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 71,
       "speaker": "B",
       "text": "Really didn't have control over you.",
       "start": 1593990,
       "end": 1597202,
       "confidence": 0.8512616666666667,
       "word_count": 6,
       "frequent_wc_base": 2852,
       "score": 20,
       "density": 3.3333333333333335,
       "percentile": 0
     },
     {
       "index": 72,
       "speaker": "A",
       "text": "Well, at least I thought he didn't, which is, psychologically, he doesn't have then, does he? I mean, to me he doesn't, if I don't think so. The only people control me are those I think do. And I'm, uh, only afraid of people I think I'm afraid of.",
       "start": 1597336,
       "end": 1611660,
       "confidence": 0.963817346938776,
       "word_count": 49,
       "frequent_wc_base": 2852,
       "score": 189,
       "density": 3.857142857142857,
       "percentile": 0
     },
     {
       "index": 73,
       "speaker": "B",
       "text": "So you really didn't have this attitude toward him?",
       "start": 1631010,
       "end": 1633838,
       "confidence": 0.8663544444444444,
       "word_count": 9,
       "frequent_wc_base": 2852,
       "score": 23,
       "density": 2.5555555555555554,
       "percentile": 0
     },
     {
       "index": 74,
       "speaker": "A",
       "text": "No. Actually I feel kind of sorry for him nowadays. At that time I just felt more or less contemptuous. He was pointed out to me exactly what not to ever to do, no matter what it was. Um, he even put his shoes on wrong, tied him wrong and everything. Um, but then we go from there. As a fellow, I ran the service stations for, uh, for quite a period of years. And he was just like my half sister. He still is today. I see him every time he comes. Chicago, uh, doesn't, ah, scare me anymore though. And uh, uh, then there's this fellow I work for.",
       "start": 1633924,
       "end": 1688106,
       "confidence": 0.9414218018018021,
       "word_count": 111,
       "frequent_wc_base": 2852,
       "score": 310,
       "density": 2.7927927927927927,
       "percentile": 0
     },
     {
       "index": 75,
       "speaker": "B",
       "text": "But he lost his effect on you.",
       "start": 1688228,
       "end": 1690978,
       "confidence": 0.9993757142857144,
       "word_count": 7,
       "frequent_wc_base": 2852,
       "score": 2,
       "density": 0.2857142857142857,
       "percentile": 0
     },
     {
       "index": 76,
       "speaker": "A",
       "text": "Yeah, I mean, he treats other people that way, but he's just a visitor. I either visit him or he visits me. He doesn't sign my paychecks. And, um.",
       "start": 1691144,
       "end": 1700100,
       "confidence": 0.9434220689655171,
       "word_count": 29,
       "frequent_wc_base": 2852,
       "score": 62,
       "density": 2.1379310344827585,
       "percentile": 0
     },
     {
       "index": 77,
       "speaker": "C",
       "text": "It.",
       "start": 1709150,
       "end": 1709900,
       "confidence": 0.67,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 78,
       "speaker": "B",
       "text": "When he becomes no longer the person you have to depend on in an important economic way, then the effects of that.",
       "start": 1727330,
       "end": 1738740,
       "confidence": 0.9671572727272726,
       "word_count": 22,
       "frequent_wc_base": 2852,
       "score": 31,
       "density": 1.4090909090909092,
       "percentile": 0
     },
     {
       "index": 79,
       "speaker": "A",
       "text": "I feel sorry for anybody that's working for him. And I don't even know who their names are. That's all it means to me. He isn't such an unlikable fellow as a visitor to come to Chicago and go to have dinner with and go to movie with and put on a train, or if he depends on whether he's this month getting drunk or this month's not, but to get drunk with and so forth. He's all right for that. He just isn't worth the box of me from my viewpoint. But he was just, uh.",
       "start": 1739830,
       "end": 1771560,
       "confidence": 0.9152184536082476,
       "word_count": 97,
       "frequent_wc_base": 2852,
       "score": 224,
       "density": 2.3092783505154637,
       "percentile": 0
     },
     {
       "index": 80,
       "speaker": "B",
       "text": "Really though, Larry, I'm just saying you can get along with this guy pretty well on a friendship basis. Just so long as he isn't your boss anymore. These bad features don't bother you, it's tough on somebody else. But that really doesn't upset you to have him be the way he is?",
       "start": 1771792,
       "end": 1795410,
       "confidence": 0.9503250943396228,
       "word_count": 53,
       "frequent_wc_base": 2852,
       "score": 205,
       "density": 3.8679245283018866,
       "percentile": 0
     },
     {
       "index": 81,
       "speaker": "A",
       "text": "No.",
       "start": 1795560,
       "end": 1796018,
       "confidence": 1.0,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 82,
       "speaker": "B",
       "text": "As long as he isn't controlling you.",
       "start": 1796104,
       "end": 1799490,
       "confidence": 0.9883914285714287,
       "word_count": 7,
       "frequent_wc_base": 2852,
       "score": 13,
       "density": 1.8571428571428572,
       "percentile": 0
     },
     {
       "index": 83,
       "speaker": "A",
       "text": "Yeah, it doesn't upset me too, because I don't know the people that work for him either. I mean, that would upset me a little. Uh, even after I left him and I still knew the whole crew over there that used to bother me.",
       "start": 1799640,
       "end": 1812220,
       "confidence": 0.9215973333333335,
       "word_count": 45,
       "frequent_wc_base": 2852,
       "score": 186,
       "density": 4.133333333333334,
       "percentile": 0
     },
     {
       "index": 84,
       "speaker": "B",
       "text": "If you could still have some feeling for the people who are under him, that would still disturb you. Yeah, that's going on to somebody, you know.",
       "start": 1831650,
       "end": 1843794,
       "confidence": 0.9079411111111113,
       "word_count": 27,
       "frequent_wc_base": 2852,
       "score": 128,
       "density": 4.7407407407407405,
       "percentile": 0
     },
     {
       "index": 85,
       "speaker": "A",
       "text": "Yeah. But now that, um, I don't think there's a person over there that I know, actually, um, to me it's just regrettable that he's that kind of a boss. But I guess he's no. Well, he is worse than the average, but I guess there are 20% in the world worse than he is or something. Um, but he is stepped too. And he is like my sister, only not quite as bad. Uh, then there's, uh, the army. I never stayed under the same guy long enough to fellow for nine months, the Aleutians. I was under a captain in South America for a year and a. Ah. Oh, but there was a lieutenant in South America that fits this pattern. And actually he was our immediate boss. I mean, he was the, I don't know what he was around. He was the group leader, the direct contact boss. And the other one was remote. He was off the office somewhere. And uh, he was a good first class bastard from my viewpoint. Bow down the par with the worst of any of these. But he was a sad case anyway. He was down there and his wife was home dying and he couldn't get away and had some terrible disease, I don't remember what. But he was driven through his wet sand. Anyway, to me he was largely excusable. The only thing to do was stay out of his way the best you could because he wasn't going to act right when you were near him. So just don't be around when he's acting. That's the best you can do for that guy. And regret this and you still do have to do what he tells you to.",
       "start": 1843912,
       "end": 1964620,
       "confidence": 0.9253549828178689,
       "word_count": 291,
       "frequent_wc_base": 2852,
       "score": 528,
       "density": 1.8144329896907216,
       "percentile": 0
     },
     {
       "index": 86,
       "speaker": "C",
       "text": "Um.",
       "start": 1966340,
       "end": 1969100,
       "confidence": 1.0,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 87,
       "speaker": "A",
       "text": "But he would fit the pattern. Then the rest of men in the army know don't seem to fit. They were just all sorts. And, uh, most of them likable fellas, but some of them quite likable, but they don't seem to be that tight. And uh, then this working her rent a car place and they don't seem to be. I went back to work. That filling station, of course, worked for a couple of years and I got into business with my half sister and she ended out even worse than I can describe. But, uh, I'd started that when I was five. That wasn't too terribly surprising. And, uh, the rent a car people, I liked the guy I worked for and still like him. I didn't like the people in the home office, but, uh, they didn't show up very often and something. And then this fellow I work for now, he definitely is the type again, but quite largely, it seems like they are the bosses. There's a few minor exceptions or something, but quite largely they are the bosses. And from the time I was born, one of them, for the longest period of time, had the most reception born to me. It, um. I'm sure that I've got something to do with, let's put it this way. Now, whether this thing I've got here was talking about is the something, I don't know, maybe this sounds more sensible to m me than that other one I was telling you about. Or that some. That I just end up being.",
       "start": 1969100,
       "end": 2097060,
       "confidence": 0.9334817293233079,
       "word_count": 266,
       "frequent_wc_base": 2852,
       "score": 760,
       "density": 2.857142857142857,
       "percentile": 0
     },
     {
       "index": 88,
       "speaker": "C",
       "text": "Um.",
       "start": 2102140,
       "end": 2102180,
       "confidence": 0.98,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 89,
       "speaker": "A",
       "text": "Hired by this kind of person or something. Though this is true, if I go for a job interview, I, uh, do not put on the domineering or the, um. I'm not the army sergeant type of boss. It's obvious to anybody that sees me that I'm not. I suspect that from their point of view, I am going to be somebody you can control. Particularly, I think an insecure boss is going to think that this will be all right. He's pretty bright and I can always keep him under me. And, um, if I need to stiffen his backbone a little, I'll just kick him in the butt occasionally and tell him to straighten out or, uh, something. But anyway, I'm not, uh, drill sergeant type, and, uh, they know it. I mean, that's very obvious. And they might tend to pick me out of a bunch.",
       "start": 2102180,
       "end": 2191250,
       "confidence": 0.9407300671140936,
       "word_count": 149,
       "frequent_wc_base": 2852,
       "score": 336,
       "density": 2.2550335570469797,
       "percentile": 0
     },
     {
       "index": 90,
       "speaker": "B",
       "text": "Here. I get that you're saying, here's my appraisal of myself. I am probably the kind of guy who looks pretty bright but controllable. And if I run into somebody who wants to have a person like me under him, that's probably one way that accounts for how I wind up in relation to this kind of person.",
       "start": 2209550,
       "end": 2243458,
       "confidence": 0.9689563793103448,
       "word_count": 58,
       "frequent_wc_base": 2852,
       "score": 278,
       "density": 4.793103448275862,
       "percentile": 0
     },
     {
       "index": 91,
       "speaker": "A",
       "text": "Well, I'll tell you this. Do you know anything about the, um, employment, these employee employment agency that you register with? I thought I wanted to work for one of them. They work strictly commission. Uh, they're always running ads. Later on, you find that they want counselors. That's one way. Or agents or, uh, something, rather. Okay. You learn later on those are paid ads. They just want you in there long enough to sell you on going to look for a job. They do always need counselors because they're always quit. Had strict commission job with no guarantee at all to it. I talked to several of them. Of course, I had, uh, in the back of my mind was another idea, too. I get in there long enough to find the best job and get out. Uh, they may have known that they're pretty bright in a way, but they definitely run. You almost could call it a racket. In a way. It's an unpalatable thing as far as I'm concerned. And, um, what you do is get as many jobs as you possibly can get your hands on, m by hook or crook. And you get as many people into you as your desk. Everybody's on his own. They have the name of the company or anything, and you try to get them paired off. So the, uh, universal rule is you get as many people walking as you can get walking. If you've got any time to line up their list of cars and people and try to get any sort of fit, that's up to you. But it's largely considered. I have since learned I know some of those people now, a, uh, waste of everybody's time to waste any time trying to fit in the job. And a person, if, uh, it says definitely no colored people or something, I'd be a little careful. Or, uh, definitely college education, where then he goes to a certain bunch. But other than that, uh, there's no effort. And you send people to places that, um, they obviously know. Um, you can tell when you get there that those people did not know this employment agency had their name at all. But they are taking applications, and they will list you. They'll take your application, and maybe they'll talk to you. But they, uh, comb the ads. They do everything, and they send you places. You're actually unwelcome. Um, and, uh, just because they know, um, through the grapevine some way that this place is taking application, and if they can get 100 of the people that they have the names of out asking for jobs, they're going to make more money. That's just the way it works. More of them are going to get jobs. Well, uh, the description of this is just to show you that they want what in their terms are, uh, what they describe as a real go getter, a real brassy, push them, shove them around person. I tried at least ten different places to get that same job, and they take one look at me and won't have anything to do with me. And those people are not dumb. They are a kind that I don't like. But it would be very wrong for me to say that they are dumb. They're not at all dumb.",
       "start": 2243624,
       "end": 2439090,
       "confidence": 0.9391901410934748,
       "word_count": 567,
       "frequent_wc_base": 2852,
       "score": 2020,
       "density": 3.562610229276896,
       "percentile": 0
     },
     {
       "index": 92,
       "speaker": "B",
       "text": "And they size you up rightly when they know that you are not the brassy, sharp, uh, pushing sort of person.",
       "start": 2457370,
       "end": 2465260,
       "confidence": 0.9183647619047617,
       "word_count": 21,
       "frequent_wc_base": 2852,
       "score": 57,
       "density": 2.7142857142857144,
       "percentile": 0
     },
     {
       "index": 93,
       "speaker": "A",
       "text": "That's the way maybe m those aren't accurate adjectives, but at least I'm not the sort of person that would make money, because I get 30% of the company's cut. My manager gets 5% of all of his groups, mine and yours and his, and his manager gets 2%. Of these, of all of them. It all works like that. So they lose money if they hire me because I'm not going to make a living. And they are going to cut down on their income.",
       "start": 2466350,
       "end": 2496050,
       "confidence": 0.9473361627906975,
       "word_count": 86,
       "frequent_wc_base": 2852,
       "score": 306,
       "density": 3.558139534883721,
       "percentile": 0
     },
     {
       "index": 94,
       "speaker": "B",
       "text": "Again, this is the kind of guy you are.",
       "start": 2514350,
       "end": 2516986,
       "confidence": 0.9516533333333334,
       "word_count": 9,
       "frequent_wc_base": 2852,
       "score": 38,
       "density": 4.222222222222222,
       "percentile": 0
     },
     {
       "index": 95,
       "speaker": "A",
       "text": "They see, uh.",
       "start": 2517088,
       "end": 2517860,
       "confidence": 0.9530766666666666,
       "word_count": 3,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 96,
       "speaker": "B",
       "text": "And you know it.",
       "start": 2517888,
       "end": 2519050,
       "confidence": 0.9999975,
       "word_count": 4,
       "frequent_wc_base": 2852,
       "score": 42,
       "density": 10.5,
       "percentile": 100.0
     },
     {
       "index": 97,
       "speaker": "A",
       "text": "Well, to me this is good evidence because I think, um. In a sense, I admire those people for their snap judgment. In these cases, though, I don't like them. And um. Uh. They tend to have an affinity for the same sort of job that they like too. They want to place salesmen, particularly what they call fast closers. What they want is people selling deep freezers, aluminum storm windows, plots and graveyards, um, used cars and that sort of thing. That's the kind of jobs they want. And um, those jobs are potentially good for that type of person. But they wouldn't want a place that anybody is a sociology professor or anything like that. Or a clerk at the administration building over here or something like that. They don't even have any feeling for those kind of jobs and wish they didn't come in, I think. Except that they make a little money. But those people as a whole are pretty intelligent and they're pretty good at their snap judgment. Particularly, they can see whether you are or are not that type. And that's the type they want. The type they make their money on the type they are. And um. They are universal in their agreement that I'm not the type. Also, these same people that I'm talking about here. Would none of them hire that type instant that type walked through the door, they would have nothing to do with it.",
       "start": 2519200,
       "end": 2610940,
       "confidence": 0.9494951219512193,
       "word_count": 246,
       "frequent_wc_base": 2852,
       "score": 1025,
       "density": 4.166666666666667,
       "percentile": 0
     },
     {
       "index": 98,
       "speaker": "B",
       "text": "Driving yourself pretty clearly the kind of person you know yourself to be. And other people confirm this, but these people wouldn't take that brassy, hard, driving, fast, closer kind of guy. They're looking for you. Is that what you're saying?",
       "start": 2634150,
       "end": 2654886,
       "confidence": 0.9886258536585367,
       "word_count": 41,
       "frequent_wc_base": 2852,
       "score": 243,
       "density": 5.926829268292683,
       "percentile": 80.0
     },
     {
       "index": 99,
       "speaker": "A",
       "text": "Yeah. Like me, there is something about you.",
       "start": 2654908,
       "end": 2658982,
       "confidence": 0.97124875,
       "word_count": 8,
       "frequent_wc_base": 2852,
       "score": 83,
       "density": 10.375,
       "percentile": 100.0
     },
     {
       "index": 100,
       "speaker": "B",
       "text": "That attracts this kind of person.",
       "start": 2659036,
       "end": 2663020,
       "confidence": 0.91633,
       "word_count": 6,
       "frequent_wc_base": 2852,
       "score": 32,
       "density": 5.333333333333333,
       "percentile": 40.0
     },
     {
       "index": 101,
       "speaker": "A",
       "text": "And then here, I think, is a little bit of a fall of mine. I don't talk well enough, uh, and I don't have enough. I'm too insecure, let's put it this way. So in a sense, verbally, I misrepresent myself. But it's not on purpose. It's the best I can do. Because I go out to look for jobs. And I know that they prefer most places, somebody with what they call a little more brass, a little more push or something than I can produce. So I try to pretend it a little, which brings me a little more toward their point. But they still don't want me. And, uh. Actually, I misrepresent myself in this way, that my brains don't work that way. And here's what happens. I get in under these people and in. I don't want to say this, but in many ways I do, before too long, know a hell of a lot more about a lot of things than they do. And they begin to suspect it after a while. And then, uh, I'm an hot water.",
       "start": 2663710,
       "end": 2735140,
       "confidence": 0.9448620108695651,
       "word_count": 184,
       "frequent_wc_base": 2852,
       "score": 465,
       "density": 2.527173913043478,
       "percentile": 0
     },
     {
       "index": 102,
       "speaker": "B",
       "text": "Get into a position where you feel you're kind of threatening to them.",
       "start": 2758170,
       "end": 2762234,
       "confidence": 0.9565515384615385,
       "word_count": 13,
       "frequent_wc_base": 2852,
       "score": 90,
       "density": 6.923076923076923,
       "percentile": 100.0
     },
     {
       "index": 103,
       "speaker": "A",
       "text": "Yeah.",
       "start": 2762352,
       "end": 2762922,
       "confidence": 0.93,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 104,
       "speaker": "B",
       "text": "And they perceive this.",
       "start": 2763056,
       "end": 2764780,
       "confidence": 0.81378,
       "word_count": 4,
       "frequent_wc_base": 2852,
       "score": 3,
       "density": 0.75,
       "percentile": 0
     },
     {
       "index": 105,
       "speaker": "A",
       "text": "Ah. And they don't like it.",
       "start": 2764980,
       "end": 2768346,
       "confidence": 0.9966616666666667,
       "word_count": 6,
       "frequent_wc_base": 2852,
       "score": 56,
       "density": 9.333333333333334,
       "percentile": 100.0
     },
     {
       "index": 106,
       "speaker": "B",
       "text": "And this is a source of.",
       "start": 2768448,
       "end": 2770186,
       "confidence": 0.96893,
       "word_count": 6,
       "frequent_wc_base": 2852,
       "score": 1,
       "density": 0.16666666666666666,
       "percentile": 0
     },
     {
       "index": 107,
       "speaker": "A",
       "text": "I don't know if they know they perceive it. Let's say they smell it somewhere.",
       "start": 2770288,
       "end": 2776282,
       "confidence": 0.893076,
       "word_count": 15,
       "frequent_wc_base": 2852,
       "score": 106,
       "density": 7.066666666666666,
       "percentile": 100.0
     },
     {
       "index": 108,
       "speaker": "B",
       "text": "Here's a guy who knows too much. He's underneath me.",
       "start": 2776346,
       "end": 2783694,
       "confidence": 0.936047,
       "word_count": 10,
       "frequent_wc_base": 2852,
       "score": 13,
       "density": 1.3,
       "percentile": 0
     },
     {
       "index": 109,
       "speaker": "A",
       "text": "But I don't know if I ever get it said, even mentally. And I'm not saying this, uh, this type to me, actually. They are pretty sensitive. And, uh, they like to think they know more about everything than anybody under them. And, um, uh. If it gets to the point that they suspect I know more about even one 10th of the things of their whole repertoire than they do, they are already, uh, touchy on it. I mean, they don't like that. I'm trying to say that it's not that I know as much as any of these people do. In some cases, I'm convinced I do know more. But in the case of my immediate boss, I will never know the things about the zipper business he knows, because, truthfully, I'm not that interested in the same aspects of it that he is. And, um, I am never going to know. I don't think half as much about it as he does in any of the areas that he knows about it. And anything I know in other areas, he isn't even going to be aware of. Because he doesn't know those areas exist even. But he is touchy enough. So I think he smells that I do know more about some of it. And furthermore, this applies particularly to what you might call extracurricular things. For instance, he horrifies me with some of his economic and political inconsistencies at lunchtime. And I'm sure that once in a while I don't get it covered up. And that doesn't do any good.",
       "start": 2783732,
       "end": 2881820,
       "confidence": 0.9523502651515147,
       "word_count": 264,
       "frequent_wc_base": 2852,
       "score": 1080,
       "density": 4.090909090909091,
       "percentile": 0
     },
     {
       "index": 110,
       "speaker": "C",
       "text": "You. It.",
       "start": 2883870,
       "end": 2884900,
       "confidence": 0.8,
       "word_count": 2,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 111,
       "speaker": "B",
       "text": "There are some fundamental differences in basic m attitudes like that.",
       "start": 2897610,
       "end": 2904102,
       "confidence": 0.9593827272727272,
       "word_count": 11,
       "frequent_wc_base": 2852,
       "score": 62,
       "density": 5.636363636363637,
       "percentile": 59.99999999999999
     },
     {
       "index": 112,
       "speaker": "A",
       "text": "Yeah.",
       "start": 2904156,
       "end": 2904518,
       "confidence": 0.72,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 113,
       "speaker": "B",
       "text": "And sometimes these show and they.",
       "start": 2904604,
       "end": 2906838,
       "confidence": 0.9556033333333334,
       "word_count": 6,
       "frequent_wc_base": 2852,
       "score": 8,
       "density": 1.3333333333333333,
       "percentile": 0
     },
     {
       "index": 114,
       "speaker": "A",
       "text": "I think they, in the same day, cut you apart the same day. He gave me a long winded argument. He gave one of the girls sitting right beside me at lunch. A long winded argument about I was absolutely wrong for a company to give a bonus gift stock to employees as a bonus because of the capitalistic system. Some way that you should only have even the most minute say so about a business because you had been able to save your money and by your own choice bought this stock. It was not proper to give it to him. Now he turns around, he's got some kind of an argument where, uh, well, this typical one in the paper about a person can't raise a kid on $600 a year. And he's supposed to have this sufficient amount of exemption to raise this kid free, which is, uh, I would say socialistic. It's all right with me. I'm not against it. But it doesn't fit with a whole lot of these things. And day after day, he goes on with these crazy economic theories that are so inconsistent. And one day he calls himself yesterday a liar. And after I have to listen to this, I can't get away. And I m sure shows my face sometimes. And I think, maybe he doesn't like it, but I can't help but he's so dumb. Dumb can't cover.",
       "start": 2906924,
       "end": 2985140,
       "confidence": 0.9388314644351463,
       "word_count": 239,
       "frequent_wc_base": 2852,
       "score": 618,
       "density": 2.585774058577406,
       "percentile": 0
     },
     {
       "index": 115,
       "speaker": "B",
       "text": "It's what you're saying shows on your face. Is either your distaste for what.",
       "start": 2997130,
       "end": 3007190,
       "confidence": 0.9320064285714286,
       "word_count": 14,
       "frequent_wc_base": 2852,
       "score": 33,
       "density": 2.357142857142857,
       "percentile": 0
     },
     {
       "index": 116,
       "speaker": "A",
       "text": "I don't like to see anybody make an idiot out of themselves. I really don't. And, you know, that's one of my prime fears that I'll make fool out of myself. And I don't like seeing anybody else do this. And it makes me sweat.",
       "start": 3007260,
       "end": 3018490,
       "confidence": 0.9253704444444447,
       "word_count": 45,
       "frequent_wc_base": 2852,
       "score": 254,
       "density": 5.644444444444445,
       "percentile": 80.0
     },
     {
       "index": 117,
       "speaker": "B",
       "text": "Uh, one of the things that your face might show him is that you think he's acting like a jerk. He's a damn ass. This is something you hate to be yourself and you hate.",
       "start": 3037020,
       "end": 3047582,
       "confidence": 0.9561602857142859,
       "word_count": 35,
       "frequent_wc_base": 2852,
       "score": 170,
       "density": 4.857142857142857,
       "percentile": 0.0
     },
     {
       "index": 118,
       "speaker": "A",
       "text": "I don't want him to be it either, but he insists on being one. It's quite the same thing I can do occasionally. And I don't get it covered up. And all I'm doing is saying there is some extracurricular things besides ce. I mean, that has something to do with zipper, uh, business. But it has a lot to do with e and I. Just as much to do with e and I than anytime he and I are talking about a zipper.",
       "start": 3047646,
       "end": 3070010,
       "confidence": 0.9235490476190478,
       "word_count": 84,
       "frequent_wc_base": 2852,
       "score": 190,
       "density": 2.261904761904762,
       "percentile": 0
     },
     {
       "index": 119,
       "speaker": "B",
       "text": "I feel I'm cutting into.",
       "start": 3071870,
       "end": 3074300,
       "confidence": 0.8525379999999998,
       "word_count": 5,
       "frequent_wc_base": 2852,
       "score": 21,
       "density": 4.2,
       "percentile": 0
     },
     {
       "index": 120,
       "speaker": "C",
       "text": "It. M.",
       "start": 3084150,
       "end": 3112420,
       "confidence": 0.8300000000000001,
       "word_count": 2,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 121,
       "speaker": "A",
       "text": "M uh, a year. And he's supposed to have sufficient amount of objection to raise those kids, which is, I would say so. I'm not against it. That's why we pick a whole lot of these things. And day after day, he goes on with these crazy economic days that are so inconsistent and one day a liar. And after I have to listen to this I can't get away and I turn shows my face sometimes and I like it, but I can't help but he's the dumb. I can't tell her.",
       "start": 3134680,
       "end": 3179220,
       "confidence": 0.8711232258064513,
       "word_count": 93,
       "frequent_wc_base": 2852,
       "score": 262,
       "density": 2.817204301075269,
       "percentile": 0
     },
     {
       "index": 122,
       "speaker": "C",
       "text": "You.",
       "start": 3192510,
       "end": 3193260,
       "confidence": 0.43,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 123,
       "speaker": "A",
       "text": "What you're saying showed on your face is either.",
       "start": 3196350,
       "end": 3200042,
       "confidence": 0.7415888888888889,
       "word_count": 9,
       "frequent_wc_base": 2852,
       "score": 26,
       "density": 2.888888888888889,
       "percentile": 0
     },
     {
       "index": 124,
       "speaker": "B",
       "text": "Your distaste for.",
       "start": 3200096,
       "end": 3201740,
       "confidence": 0.79026,
       "word_count": 3,
       "frequent_wc_base": 2852,
       "score": 2,
       "density": 0.6666666666666666,
       "percentile": 0
     },
     {
       "index": 125,
       "speaker": "A",
       "text": "Anybody makes an idiot out of himself. I really don't. And you know, that's one of my crimes is that I'll make fool out of myself. And I don't like seeing anybody else do this and it makes me sad.",
       "start": 3203710,
       "end": 3214330,
       "confidence": 0.8738262500000001,
       "word_count": 40,
       "frequent_wc_base": 2852,
       "score": 164,
       "density": 4.1,
       "percentile": 0
     },
     {
       "index": 126,
       "speaker": "C",
       "text": "You.",
       "start": 3216750,
       "end": 3217500,
       "confidence": 0.26,
       "word_count": 1,
       "frequent_wc_base": 2852,
       "score": 0,
       "density": 0.0,
       "percentile": 0
     },
     {
       "index": 127,
       "speaker": "A",
       "text": "But it has a lot to do with just as much to do with he and I talking about a trip.",
       "start": 3262430,
       "end": 3268930,
       "confidence": 0.8175352380952381,
       "word_count": 21,
       "frequent_wc_base": 2852,
       "score": 36,
       "density": 1.7142857142857142,
       "percentile": 0
     },
     {
       "index": 128,
       "speaker": "B",
       "text": "I feel kind of but.",
       "start": 3270870,
       "end": 3277120,
       "confidence": 0.742176,
       "word_count": 5,
       "frequent_wc_base": 2852,
       "score": 50,
       "density": 10.0,
       "percentile": 100.0
     }
   ],
   "words": [
     {
       "speaker": "A",
       "text": "I",
       "start": 730,
       "end": 942,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't,",
       "start": 996,
       "end": 1360,
       "confidence": 0.99733,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1360,
       "end": 1570,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 4450,
       "end": 4862,
       "confidence": 0.99981,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "from",
       "start": 4916,
       "end": 5086,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "which",
       "start": 5108,
       "end": 5342,
       "confidence": 0.69133,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "angle",
       "start": 5396,
       "end": 5706,
       "confidence": 0.97054,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 5738,
       "end": 5886,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "approach",
       "start": 5908,
       "end": 6314,
       "confidence": 0.99996,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 6362,
       "end": 6574,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing.",
       "start": 6612,
       "end": 7200,
       "confidence": 0.99956,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 8920,
       "end": 10940,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 10940,
       "end": 11134,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 11172,
       "end": 11374,
       "confidence": 0.99999,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 11412,
       "end": 11614,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 11652,
       "end": 11758,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 11764,
       "end": 11982,
       "confidence": 0.56,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 12036,
       "end": 12158,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 12164,
       "end": 12334,
       "confidence": 0.93535,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 12372,
       "end": 12574,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 12612,
       "end": 12814,
       "confidence": 0.60358,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 12852,
       "end": 13102,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "big",
       "start": 13156,
       "end": 13374,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "ball.",
       "start": 13412,
       "end": 13706,
       "confidence": 0.99936,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It",
       "start": 13738,
       "end": 13838,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doesn't",
       "start": 13844,
       "end": 14026,
       "confidence": 0.70136,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "matter",
       "start": 14058,
       "end": 14254,
       "confidence": 0.99993,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "much",
       "start": 14292,
       "end": 14542,
       "confidence": 0.85901,
       "score": 15
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 14596,
       "end": 15200,
       "confidence": 0.54,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 15570,
       "end": 15886,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 15908,
       "end": 16142,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "which",
       "start": 16196,
       "end": 16414,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 16452,
       "end": 16654,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 16692,
       "end": 16846,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "try",
       "start": 16868,
       "end": 17054,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 17092,
       "end": 17198,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "go",
       "start": 17204,
       "end": 17326,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 17348,
       "end": 17534,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 17572,
       "end": 18160,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "There's",
       "start": 18530,
       "end": 19390,
       "confidence": 0.93039,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "something",
       "start": 19810,
       "end": 20222,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 20276,
       "end": 20446,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "get",
       "start": 20468,
       "end": 20654,
       "confidence": 0.99995,
       "score": 37
     },
     {
       "speaker": "B",
       "text": "into.",
       "start": 20692,
       "end": 21230,
       "confidence": 0.99985,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Is",
       "start": 21380,
       "end": 21646,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 21668,
       "end": 21806,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "it?",
       "start": 21828,
       "end": 22158,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah.",
       "start": 22244,
       "end": 22638,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "There's",
       "start": 22724,
       "end": 23018,
       "confidence": 0.99957,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something",
       "start": 23034,
       "end": 23262,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "A",
       "text": "I'd",
       "start": 23316,
       "end": 23578,
       "confidence": 0.51646,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 23594,
       "end": 23774,
       "confidence": 0.6,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 23812,
       "end": 23966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "talk",
       "start": 23988,
       "end": 24222,
       "confidence": 0.99998,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "about.",
       "start": 24276,
       "end": 24880,
       "confidence": 0.99931,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "You",
       "start": 25370,
       "end": 25686,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "don't",
       "start": 25708,
       "end": 25846,
       "confidence": 0.73621,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "know",
       "start": 25868,
       "end": 26246,
       "confidence": 0.99347,
       "score": 42
     },
     {
       "speaker": "B",
       "text": "how",
       "start": 26348,
       "end": 26566,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 26588,
       "end": 26726,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "begin.",
       "start": 26748,
       "end": 26982,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "But",
       "start": 27036,
       "end": 27254,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "in",
       "start": 27292,
       "end": 27398,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 27404,
       "end": 27526,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "way,",
       "start": 27548,
       "end": 28120,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "at",
       "start": 29770,
       "end": 30134,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "any",
       "start": 30172,
       "end": 30422,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "point.",
       "start": 30476,
       "end": 31080,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Seems",
       "start": 31610,
       "end": 32022,
       "confidence": 0.99419,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 32076,
       "end": 32294,
       "confidence": 0.76635,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 32332,
       "end": 32486,
       "confidence": 1.0,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 32508,
       "end": 32694,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 32732,
       "end": 32934,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "other.",
       "start": 32972,
       "end": 33462,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "It's",
       "start": 33596,
       "end": 33906,
       "confidence": 0.80307,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "more",
       "start": 33938,
       "end": 34086,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 34108,
       "end": 34294,
       "confidence": 0.57,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "question",
       "start": 34332,
       "end": 34582,
       "confidence": 0.99999,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 34636,
       "end": 35094,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "beginning",
       "start": 35212,
       "end": 35714,
       "confidence": 0.67906,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "than",
       "start": 35762,
       "end": 35974,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "where",
       "start": 36012,
       "end": 36214,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 36252,
       "end": 36406,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "begin.",
       "start": 36428,
       "end": 37000,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Is",
       "start": 37370,
       "end": 37686,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 37708,
       "end": 38182,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "what",
       "start": 38316,
       "end": 38614,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 38652,
       "end": 38878,
       "confidence": 0.94749,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying?",
       "start": 38914,
       "end": 39546,
       "confidence": 0.99943,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah.",
       "start": 39728,
       "end": 40460,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 42670,
       "end": 43034,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 43072,
       "end": 43322,
       "confidence": 0.99997,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 43376,
       "end": 43594,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 43632,
       "end": 43786,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 43808,
       "end": 43994,
       "confidence": 0.98045,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 44032,
       "end": 44186,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 44208,
       "end": 44346,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "were,",
       "start": 44368,
       "end": 44600,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 44600,
       "end": 45000,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 45000,
       "end": 45146,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 45168,
       "end": 45306,
       "confidence": 0.99821,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 45328,
       "end": 45466,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 45488,
       "end": 45674,
       "confidence": 0.99959,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "systematic",
       "start": 45712,
       "end": 46262,
       "confidence": 0.99981,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "set",
       "start": 46326,
       "end": 46506,
       "confidence": 0.99939,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 46528,
       "end": 46666,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feelings",
       "start": 46688,
       "end": 47062,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 47126,
       "end": 47354,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 47392,
       "end": 47834,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 47952,
       "end": 48234,
       "confidence": 0.52,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 48272,
       "end": 48426,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 48448,
       "end": 48538,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 48544,
       "end": 48762,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time,",
       "start": 48816,
       "end": 49034,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 49072,
       "end": 49178,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 49184,
       "end": 49306,
       "confidence": 0.92079,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 49328,
       "end": 49466,
       "confidence": 0.99,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 49488,
       "end": 49674,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 49712,
       "end": 49914,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 49952,
       "end": 50154,
       "confidence": 0.99929,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "out.",
       "start": 50192,
       "end": 50394,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 50432,
       "end": 50634,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 50672,
       "end": 50826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 50848,
       "end": 50986,
       "confidence": 0.99999,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 51008,
       "end": 51146,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 51168,
       "end": 51258,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 51264,
       "end": 51398,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 51424,
       "end": 51614,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "understand",
       "start": 51652,
       "end": 51950,
       "confidence": 0.99999,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 52020,
       "end": 52206,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 52228,
       "end": 52426,
       "confidence": 0.99224,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "talking",
       "start": 52458,
       "end": 52654,
       "confidence": 0.99999,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 52692,
       "end": 52894,
       "confidence": 0.69268,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 52932,
       "end": 53086,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 53108,
       "end": 53246,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 53268,
       "end": 53502,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time.",
       "start": 53556,
       "end": 54160,
       "confidence": 0.99983,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 54530,
       "end": 54942,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 54996,
       "end": 55166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 55188,
       "end": 55326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 55348,
       "end": 55582,
       "confidence": 0.93873,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 55636,
       "end": 55854,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 55892,
       "end": 56094,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "outline",
       "start": 56132,
       "end": 56698,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 56794,
       "end": 57440,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 58370,
       "end": 58734,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sort",
       "start": 58772,
       "end": 58926,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 58948,
       "end": 59086,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing,",
       "start": 59108,
       "end": 59294,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 59332,
       "end": 59486,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 59508,
       "end": 59646,
       "confidence": 0.99997,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 59668,
       "end": 59806,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "easier.",
       "start": 59828,
       "end": 60202,
       "confidence": 0.99983,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 60266,
       "end": 60880,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 61650,
       "end": 62014,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 62052,
       "end": 62206,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "spend",
       "start": 62228,
       "end": 62414,
       "confidence": 0.9998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 62452,
       "end": 62606,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 62628,
       "end": 62766,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "doing",
       "start": 62788,
       "end": 62974,
       "confidence": 0.99946,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that,",
       "start": 63012,
       "end": 63214,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 63252,
       "end": 63358,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "won't",
       "start": 63364,
       "end": 63546,
       "confidence": 0.99643,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 63578,
       "end": 63726,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "anything.",
       "start": 63748,
       "end": 64320,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Something",
       "start": 65030,
       "end": 65394,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 65432,
       "end": 65538,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "got",
       "start": 65544,
       "end": 65714,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "on",
       "start": 65752,
       "end": 65906,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "your",
       "start": 65928,
       "end": 66114,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "mind.",
       "start": 66152,
       "end": 66402,
       "confidence": 0.9998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 66456,
       "end": 67060,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "it's",
       "start": 68310,
       "end": 68766,
       "confidence": 0.74825,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "in",
       "start": 68798,
       "end": 68898,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 68904,
       "end": 69026,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "shape",
       "start": 69048,
       "end": 69326,
       "confidence": 0.99877,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 69358,
       "end": 69940,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a.",
       "start": 70550,
       "end": 70866,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Round,",
       "start": 70888,
       "end": 71502,
       "confidence": 0.99944,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uncut",
       "start": 71646,
       "end": 72542,
       "confidence": 0.95853,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "ball",
       "start": 72686,
       "end": 73006,
       "confidence": 0.96022,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 73038,
       "end": 73186,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "yarn",
       "start": 73208,
       "end": 73566,
       "confidence": 0.99906,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 73598,
       "end": 73746,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something",
       "start": 73768,
       "end": 73954,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 73992,
       "end": 74194,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "that.",
       "start": 74232,
       "end": 74820,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Or",
       "start": 75750,
       "end": 76126,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 76168,
       "end": 76326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 76348,
       "end": 76534,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 76572,
       "end": 76678,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ball",
       "start": 76684,
       "end": 76866,
       "confidence": 0.99812,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 76898,
       "end": 77046,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "string",
       "start": 77068,
       "end": 77346,
       "confidence": 0.93072,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 77378,
       "end": 77574,
       "confidence": 0.57,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "grandma",
       "start": 77612,
       "end": 78114,
       "confidence": 0.99831,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "saves",
       "start": 78162,
       "end": 78498,
       "confidence": 0.51363,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 78514,
       "end": 78790,
       "confidence": 0.64,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 78860,
       "end": 79046,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doesn't",
       "start": 79068,
       "end": 79266,
       "confidence": 0.96878,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tie",
       "start": 79298,
       "end": 79506,
       "confidence": 0.80065,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 79538,
       "end": 79686,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ends",
       "start": 79708,
       "end": 79986,
       "confidence": 0.99958,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "together.",
       "start": 80018,
       "end": 80600,
       "confidence": 0.99683,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh.",
       "start": 81540,
       "end": 82720,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um.",
       "start": 83080,
       "end": 84100,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "So",
       "start": 84490,
       "end": 84854,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "how",
       "start": 84892,
       "end": 85046,
       "confidence": 0.9998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 85068,
       "end": 85206,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "go",
       "start": 85228,
       "end": 85414,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "B",
       "text": "about",
       "start": 85452,
       "end": 86040,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "putting",
       "start": 87050,
       "end": 87474,
       "confidence": 0.999,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 87532,
       "end": 87754,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "out?",
       "start": 87792,
       "end": 88330,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah,",
       "start": 88480,
       "end": 88794,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 88832,
       "end": 88986,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 89008,
       "end": 89194,
       "confidence": 0.98699,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pull",
       "start": 89232,
       "end": 89434,
       "confidence": 0.99971,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "off",
       "start": 89472,
       "end": 89626,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 89648,
       "end": 89834,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "string",
       "start": 89872,
       "end": 90166,
       "confidence": 0.97948,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 90198,
       "end": 90346,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 90368,
       "end": 90458,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time.",
       "start": 90464,
       "end": 91020,
       "confidence": 0.9973,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "It.",
       "start": 95630,
       "end": 96090,
       "confidence": 0.44,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Well,",
       "start": 96160,
       "end": 96586,
       "confidence": 0.71293,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 96688,
       "end": 97146,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "summary",
       "start": 97248,
       "end": 97734,
       "confidence": 0.85568,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 97782,
       "end": 97946,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 97968,
       "end": 98202,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 98256,
       "end": 98518,
       "confidence": 0.61136,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 98534,
       "end": 98714,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "happy",
       "start": 98752,
       "end": 99002,
       "confidence": 0.99988,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 99056,
       "end": 99274,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 99312,
       "end": 99418,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 99424,
       "end": 99546,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 99568,
       "end": 99706,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 99728,
       "end": 99818,
       "confidence": 0.99994,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "along",
       "start": 99824,
       "end": 100042,
       "confidence": 0.93432,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 100096,
       "end": 100278,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 100304,
       "end": 100542,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "boss.",
       "start": 100596,
       "end": 101310,
       "confidence": 0.99909,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "M.",
       "start": 105140,
       "end": 106240,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 106240,
       "end": 106334,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 106372,
       "end": 106858,
       "confidence": 0.78859,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 106954,
       "end": 107358,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 107444,
       "end": 108080,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "great",
       "start": 112130,
       "end": 112638,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "prospects",
       "start": 112724,
       "end": 113870,
       "confidence": 0.79,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 115350,
       "end": 115666,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doing",
       "start": 115688,
       "end": 115922,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "much",
       "start": 115976,
       "end": 116242,
       "confidence": 0.99999,
       "score": 15
     },
     {
       "speaker": "A",
       "text": "better",
       "start": 116296,
       "end": 116900,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 117430,
       "end": 117842,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "getting",
       "start": 117896,
       "end": 118210,
       "confidence": 0.99909,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "along",
       "start": 118280,
       "end": 118562,
       "confidence": 0.99998,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 118616,
       "end": 118786,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 118808,
       "end": 119380,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 120550,
       "end": 120914,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 120952,
       "end": 121106,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 121128,
       "end": 121314,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "right",
       "start": 121352,
       "end": 121602,
       "confidence": 1.0,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "now.",
       "start": 121656,
       "end": 122260,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 126090,
       "end": 126680,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 126680,
       "end": 127750,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 130810,
       "end": 131222,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 131276,
       "end": 131590,
       "confidence": 0.99998,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 131660,
       "end": 131894,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 131932,
       "end": 132086,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "reason",
       "start": 132108,
       "end": 132438,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "we",
       "start": 132524,
       "end": 132726,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 132748,
       "end": 132946,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 132978,
       "end": 133126,
       "confidence": 1.0,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "along",
       "start": 133148,
       "end": 133430,
       "confidence": 0.99922,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 133500,
       "end": 133734,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 133772,
       "end": 134022,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 134076,
       "end": 134294,
       "confidence": 0.99977,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 134332,
       "end": 134534,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 134572,
       "end": 134774,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "sort",
       "start": 134812,
       "end": 135062,
       "confidence": 0.92734,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 135116,
       "end": 135286,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 135308,
       "end": 135446,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "am",
       "start": 135468,
       "end": 135606,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "another",
       "start": 135628,
       "end": 135910,
       "confidence": 0.99997,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "sort.",
       "start": 135980,
       "end": 136600,
       "confidence": 0.753,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 137130,
       "end": 137542,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 137596,
       "end": 137766,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 137788,
       "end": 138274,
       "confidence": 0.95112,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "really",
       "start": 138402,
       "end": 138790,
       "confidence": 0.99994,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 138860,
       "end": 139094,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 139132,
       "end": 139334,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "firm",
       "start": 139372,
       "end": 139714,
       "confidence": 0.99876,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "belief",
       "start": 139762,
       "end": 140114,
       "confidence": 0.93839,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 140162,
       "end": 140374,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "either",
       "start": 140412,
       "end": 140614,
       "confidence": 0.99983,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 140652,
       "end": 140806,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "us",
       "start": 140828,
       "end": 140966,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 140988,
       "end": 141126,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 141148,
       "end": 141238,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 141244,
       "end": 141414,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "change",
       "start": 141452,
       "end": 141702,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 141756,
       "end": 141878,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lot.",
       "start": 141884,
       "end": 142440,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 144970,
       "end": 145382,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 145436,
       "end": 145654,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "further",
       "start": 145692,
       "end": 146390,
       "confidence": 0.99084,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 148170,
       "end": 148630,
       "confidence": 0.99982,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 148700,
       "end": 149320,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 150370,
       "end": 151120,
       "confidence": 0.51,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 153490,
       "end": 153902,
       "confidence": 0.99994,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "require",
       "start": 153956,
       "end": 154830,
       "confidence": 0.99992,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "certain",
       "start": 161020,
       "end": 161432,
       "confidence": 0.99995,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "amount",
       "start": 161486,
       "end": 161704,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 161742,
       "end": 161944,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "concentration",
       "start": 161982,
       "end": 162836,
       "confidence": 0.99991,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 162948,
       "end": 163176,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 163198,
       "end": 163384,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "part.",
       "start": 163422,
       "end": 163828,
       "confidence": 0.54289,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "To",
       "start": 163934,
       "end": 164590,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "treat",
       "start": 166240,
       "end": 166700,
       "confidence": 0.99999,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 166770,
       "end": 167052,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 167106,
       "end": 167276,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 167298,
       "end": 167436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "only",
       "start": 167458,
       "end": 167692,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 167746,
       "end": 168012,
       "confidence": 0.74,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 168066,
       "end": 168284,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 168322,
       "end": 168476,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 168498,
       "end": 168732,
       "confidence": 0.84383,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 168786,
       "end": 169004,
       "confidence": 0.99975,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 169042,
       "end": 169196,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 169218,
       "end": 169404,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 169442,
       "end": 169692,
       "confidence": 0.99999,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "better",
       "start": 169746,
       "end": 170060,
       "confidence": 0.99997,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 170130,
       "end": 170460,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 170530,
       "end": 171150,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 173520,
       "end": 174040,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 174040,
       "end": 175420,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 175420,
       "end": 175864,
       "confidence": 0.9951,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "trying",
       "start": 175912,
       "end": 176124,
       "confidence": 0.99989,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 176162,
       "end": 176376,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 176418,
       "end": 176624,
       "confidence": 0.98,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 176662,
       "end": 177248,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 177414,
       "end": 177792,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 177846,
       "end": 178016,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 178038,
       "end": 178284,
       "confidence": 0.99793,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "believe",
       "start": 178332,
       "end": 178640,
       "confidence": 0.99973,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "my,",
       "start": 178710,
       "end": 179330,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh.",
       "start": 181440,
       "end": 181960,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 181960,
       "end": 182236,
       "confidence": 0.97014,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "trying",
       "start": 182268,
       "end": 182464,
       "confidence": 0.99999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 182502,
       "end": 182848,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 182934,
       "end": 183232,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 183286,
       "end": 183504,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 183542,
       "end": 183696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "am",
       "start": 183718,
       "end": 184336,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 184518,
       "end": 184960,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "entirely",
       "start": 185030,
       "end": 185692,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "unwilling",
       "start": 185756,
       "end": 186800,
       "confidence": 0.99989,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 188020,
       "end": 188384,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 188422,
       "end": 188576,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 188598,
       "end": 188796,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "effort",
       "start": 188838,
       "end": 189568,
       "confidence": 0.99181,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "to,",
       "start": 189744,
       "end": 190340,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh.",
       "start": 190340,
       "end": 190860,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "On",
       "start": 190860,
       "end": 191076,
       "confidence": 0.43,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 191098,
       "end": 191284,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "terms,",
       "start": 191322,
       "end": 191572,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kiss",
       "start": 191626,
       "end": 191936,
       "confidence": 0.65452,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 191968,
       "end": 192164,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "butt.",
       "start": 192202,
       "end": 192900,
       "confidence": 0.99322,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But,",
       "start": 193960,
       "end": 194710,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 195440,
       "end": 197680,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "From",
       "start": 197680,
       "end": 197924,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 197962,
       "end": 198116,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "practical",
       "start": 198138,
       "end": 198592,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "viewpoint,",
       "start": 198656,
       "end": 199540,
       "confidence": 0.99445,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it's",
       "start": 201580,
       "end": 202440,
       "confidence": 0.79089,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cut",
       "start": 203500,
       "end": 203864,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 203902,
       "end": 204056,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "last",
       "start": 204078,
       "end": 204312,
       "confidence": 0.99911,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 204366,
       "end": 204536,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 204558,
       "end": 204696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 204718,
       "end": 204904,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 204942,
       "end": 205096,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 205118,
       "end": 205256,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "it's",
       "start": 205278,
       "end": 205476,
       "confidence": 0.99983,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "impractical.",
       "start": 205508,
       "end": 206212,
       "confidence": 0.99871,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Because",
       "start": 206276,
       "end": 206552,
       "confidence": 0.77463,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 206606,
       "end": 206776,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can't",
       "start": 206798,
       "end": 207044,
       "confidence": 0.99884,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "remember",
       "start": 207092,
       "end": 207400,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 207470,
       "end": 207656,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ever",
       "start": 207678,
       "end": 207912,
       "confidence": 0.72,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 207966,
       "end": 208184,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 208222,
       "end": 208376,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "enough,",
       "start": 208398,
       "end": 208970,
       "confidence": 0.99987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "consistently",
       "start": 209660,
       "end": 210548,
       "confidence": 0.98141,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "enough.",
       "start": 210644,
       "end": 210780,
       "confidence": 0.99987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh.",
       "start": 210780,
       "end": 211660,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 211660,
       "end": 211736,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 211758,
       "end": 211956,
       "confidence": 0.97761,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "naturally",
       "start": 211988,
       "end": 212532,
       "confidence": 0.99978,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 212596,
       "end": 212872,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 212926,
       "end": 213144,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way.",
       "start": 213182,
       "end": 213816,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 213998,
       "end": 214388,
       "confidence": 0.70252,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "trying",
       "start": 214404,
       "end": 214584,
       "confidence": 0.99997,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 214622,
       "end": 214728,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 214734,
       "end": 214868,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 214894,
       "end": 215036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "strong",
       "start": 215058,
       "end": 215292,
       "confidence": 0.99936,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "point",
       "start": 215346,
       "end": 215564,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 215602,
       "end": 215756,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 215778,
       "end": 215916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "might",
       "start": 215938,
       "end": 216076,
       "confidence": 0.99998,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 216098,
       "end": 216236,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "willing",
       "start": 216258,
       "end": 216536,
       "confidence": 0.99996,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 216568,
       "end": 216716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "try",
       "start": 216738,
       "end": 216924,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 216962,
       "end": 217116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 217138,
       "end": 217276,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 217298,
       "end": 217388,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 217394,
       "end": 217528,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 217544,
       "end": 217676,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 217698,
       "end": 217836,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 217858,
       "end": 218044,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 218082,
       "end": 218284,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 218322,
       "end": 218956,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 219138,
       "end": 219484,
       "confidence": 0.75668,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sufficiently",
       "start": 219522,
       "end": 220184,
       "confidence": 0.9878,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "well.",
       "start": 220232,
       "end": 220830,
       "confidence": 0.99939,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "You",
       "start": 221520,
       "end": 221884,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "really",
       "start": 221922,
       "end": 222220,
       "confidence": 0.99997,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "feel",
       "start": 222290,
       "end": 222668,
       "confidence": 0.99999,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 222754,
       "end": 222956,
       "confidence": 0.99998,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 222978,
       "end": 223116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "hopeless",
       "start": 223138,
       "end": 223592,
       "confidence": 0.98997,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "about",
       "start": 223656,
       "end": 224316,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 224498,
       "end": 225230,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "difference",
       "start": 226320,
       "end": 226876,
       "confidence": 0.99996,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "between",
       "start": 226978,
       "end": 227340,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 227410,
       "end": 227608,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "and",
       "start": 227634,
       "end": 227824,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "him.",
       "start": 227862,
       "end": 228496,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Um,",
       "start": 228660,
       "end": 229100,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you'd",
       "start": 229100,
       "end": 229116,
       "confidence": 0.95197,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 229148,
       "end": 229296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 229318,
       "end": 229552,
       "confidence": 0.64,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "really",
       "start": 229606,
       "end": 229968,
       "confidence": 0.535,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "make",
       "start": 230054,
       "end": 230304,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "an",
       "start": 230342,
       "end": 230448,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "effort",
       "start": 230454,
       "end": 230764,
       "confidence": 0.99987,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 230812,
       "end": 230976,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "be",
       "start": 230998,
       "end": 231136,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 231158,
       "end": 231248,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "different",
       "start": 231254,
       "end": 231424,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 231462,
       "end": 231616,
       "confidence": 0.51955,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 231638,
       "end": 231824,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "person.",
       "start": 231862,
       "end": 232208,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Or",
       "start": 232294,
       "end": 232784,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "extend",
       "start": 232902,
       "end": 233580,
       "confidence": 0.88172,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "yourself",
       "start": 233660,
       "end": 234048,
       "confidence": 0.99973,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 234134,
       "end": 234288,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "lot",
       "start": 234294,
       "end": 234512,
       "confidence": 0.87,
       "score": 14
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 234566,
       "end": 235168,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "make",
       "start": 235334,
       "end": 235616,
       "confidence": 0.74,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "it",
       "start": 235638,
       "end": 235824,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "work.",
       "start": 235862,
       "end": 236450,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 237460,
       "end": 237872,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you'd",
       "start": 237926,
       "end": 238268,
       "confidence": 0.63035,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 238284,
       "end": 238416,
       "confidence": 0.99973,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 238438,
       "end": 238576,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "like",
       "start": 238598,
       "end": 238844,
       "confidence": 0.97,
       "score": 56
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 238902,
       "end": 239220,
       "confidence": 0.52,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "save",
       "start": 239290,
       "end": 239668,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 239754,
       "end": 240052,
       "confidence": 0.69,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "situation",
       "start": 240106,
       "end": 240612,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "or",
       "start": 240746,
       "end": 241044,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "something",
       "start": 241082,
       "end": 241332,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "B",
       "text": "like",
       "start": 241386,
       "end": 241556,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "B",
       "text": "that.",
       "start": 241578,
       "end": 242150,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "But",
       "start": 243080,
       "end": 243540,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "by",
       "start": 243610,
       "end": 243844,
       "confidence": 0.98051,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "God,",
       "start": 243882,
       "end": 244468,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "it",
       "start": 244634,
       "end": 245012,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "seems",
       "start": 245066,
       "end": 245332,
       "confidence": 0.99339,
       "score": 7
     },
     {
       "speaker": "B",
       "text": "so",
       "start": 245386,
       "end": 245604,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "foreign",
       "start": 245642,
       "end": 246064,
       "confidence": 0.97441,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 246112,
       "end": 246324,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 246362,
       "end": 246950,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 248440,
       "end": 249236,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 249418,
       "end": 249716,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 249738,
       "end": 249876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "behave",
       "start": 249898,
       "end": 250144,
       "confidence": 0.54662,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 250192,
       "end": 250356,
       "confidence": 0.83,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "way",
       "start": 250378,
       "end": 250564,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "B",
       "text": "you'd",
       "start": 250602,
       "end": 250816,
       "confidence": 0.96631,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 250848,
       "end": 250996,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 251018,
       "end": 251156,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "behave.",
       "start": 251178,
       "end": 251552,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "That",
       "start": 251616,
       "end": 251796,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 251818,
       "end": 251956,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "really",
       "start": 251978,
       "end": 252164,
       "confidence": 0.99998,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "doubt",
       "start": 252202,
       "end": 252416,
       "confidence": 0.98174,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "whether",
       "start": 252448,
       "end": 253028,
       "confidence": 0.99931,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 253194,
       "end": 253524,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "could",
       "start": 253562,
       "end": 253716,
       "confidence": 0.99974,
       "score": 16
     },
     {
       "speaker": "B",
       "text": "carry",
       "start": 253738,
       "end": 254028,
       "confidence": 0.75,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "it",
       "start": 254064,
       "end": 254168,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "off.",
       "start": 254174,
       "end": 254392,
       "confidence": 0.71,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Even",
       "start": 254446,
       "end": 254616,
       "confidence": 0.9998,
       "score": 19
     },
     {
       "speaker": "B",
       "text": "if",
       "start": 254638,
       "end": 254776,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 254798,
       "end": 254936,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "do.",
       "start": 254958,
       "end": 255576,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Even",
       "start": 255758,
       "end": 256104,
       "confidence": 0.99974,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 256142,
       "end": 256296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 256318,
       "end": 256516,
       "confidence": 0.9286,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "willing",
       "start": 256548,
       "end": 256884,
       "confidence": 0.8975,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to,",
       "start": 256932,
       "end": 257260,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 257260,
       "end": 257800,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 257800,
       "end": 258024,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 258062,
       "end": 258216,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 258238,
       "end": 258424,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "call",
       "start": 258462,
       "end": 258664,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 258702,
       "end": 258856,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 258878,
       "end": 259064,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 259102,
       "end": 259304,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "extent",
       "start": 259342,
       "end": 259684,
       "confidence": 0.99962,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "false",
       "start": 259732,
       "end": 260116,
       "confidence": 0.62277,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 260148,
       "end": 260296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 260318,
       "end": 260456,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 260478,
       "end": 260616,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "believe",
       "start": 260638,
       "end": 260872,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "in.",
       "start": 260926,
       "end": 261576,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Just",
       "start": 261758,
       "end": 262152,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 262206,
       "end": 262424,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 262462,
       "end": 262712,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "economic",
       "start": 262766,
       "end": 263364,
       "confidence": 0.91112,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "purposes",
       "start": 263412,
       "end": 264160,
       "confidence": 0.46764,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of,",
       "start": 264260,
       "end": 264740,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 264740,
       "end": 265840,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 265940,
       "end": 266140,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "saving",
       "start": 266140,
       "end": 266540,
       "confidence": 0.9982,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 266610,
       "end": 266844,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "job",
       "start": 266882,
       "end": 267180,
       "confidence": 1.0,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 267250,
       "end": 267436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 267458,
       "end": 267596,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "psychological",
       "start": 267618,
       "end": 268344,
       "confidence": 0.9879,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "purpose",
       "start": 268392,
       "end": 268744,
       "confidence": 0.96195,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 268792,
       "end": 268956,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have.",
       "start": 268978,
       "end": 269116,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Unless",
       "start": 269138,
       "end": 269820,
       "confidence": 0.88795,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "friction.",
       "start": 270880,
       "end": 270980,
       "confidence": 0.90988,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 270980,
       "end": 271020,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 271912,
       "end": 272216,
       "confidence": 0.52641,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 272248,
       "end": 272444,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sure",
       "start": 272482,
       "end": 272636,
       "confidence": 0.99998,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 272658,
       "end": 272940,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 273010,
       "end": 273244,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "seems",
       "start": 273282,
       "end": 273484,
       "confidence": 0.99996,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 273522,
       "end": 273628,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 273634,
       "end": 273804,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "impractical",
       "start": 273842,
       "end": 274472,
       "confidence": 0.7242,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 274536,
       "end": 274764,
       "confidence": 0.69,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 274802,
       "end": 274908,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 274914,
       "end": 275084,
       "confidence": 0.97119,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 275122,
       "end": 275324,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 275362,
       "end": 276044,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 276242,
       "end": 276556,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 276578,
       "end": 276764,
       "confidence": 1.0,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "forget.",
       "start": 276802,
       "end": 277336,
       "confidence": 0.50776,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 277448,
       "end": 277860,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 277860,
       "end": 278200,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 278200,
       "end": 278252,
       "confidence": 0.5,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "certain",
       "start": 278306,
       "end": 278572,
       "confidence": 0.99998,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "cases",
       "start": 278626,
       "end": 279032,
       "confidence": 0.89028,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 279096,
       "end": 279276,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 279298,
       "end": 279436,
       "confidence": 0.99999,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 279458,
       "end": 279596,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 279618,
       "end": 279720,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "little",
       "start": 279730,
       "end": 279904,
       "confidence": 0.99994,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "too",
       "start": 279942,
       "end": 280144,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "angry",
       "start": 280182,
       "end": 280476,
       "confidence": 0.96246,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 280508,
       "end": 280656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 280678,
       "end": 280864,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "myself",
       "start": 280902,
       "end": 281200,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 281270,
       "end": 281456,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 281478,
       "end": 281616,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 281638,
       "end": 281776,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 281798,
       "end": 281984,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "proper",
       "start": 282022,
       "end": 282320,
       "confidence": 0.99981,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "moment.",
       "start": 282390,
       "end": 283010,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 284600,
       "end": 284840,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 285060,
       "end": 285376,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 285398,
       "end": 285536,
       "confidence": 0.99999,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "walk",
       "start": 285558,
       "end": 285744,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "around,",
       "start": 285782,
       "end": 286032,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tell,",
       "start": 286086,
       "end": 286120,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 286120,
       "end": 286260,
       "confidence": 0.83,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 286278,
       "end": 286368,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 286374,
       "end": 286496,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 286518,
       "end": 286608,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 286614,
       "end": 286736,
       "confidence": 0.99999,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "fellow",
       "start": 286758,
       "end": 287116,
       "confidence": 0.92709,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 287148,
       "end": 287296,
       "confidence": 0.99496,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is.",
       "start": 287318,
       "end": 287720,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 287720,
       "end": 288000,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 288000,
       "end": 288256,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "long",
       "start": 288278,
       "end": 288464,
       "confidence": 0.98636,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 288502,
       "end": 288704,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 288742,
       "end": 289424,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wasn't",
       "start": 289622,
       "end": 290156,
       "confidence": 0.94577,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "too",
       "start": 290188,
       "end": 290432,
       "confidence": 0.62,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mad",
       "start": 290486,
       "end": 290796,
       "confidence": 0.99968,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 290828,
       "end": 290976,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 290998,
       "end": 291184,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 291222,
       "end": 291484,
       "confidence": 0.99994,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 291542,
       "end": 291764,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 291802,
       "end": 292052,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 292106,
       "end": 292324,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "maybe",
       "start": 292362,
       "end": 292612,
       "confidence": 0.99972,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 292666,
       "end": 292788,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 292794,
       "end": 292916,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 292938,
       "end": 293124,
       "confidence": 0.99971,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 293162,
       "end": 293364,
       "confidence": 0.99869,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "needs",
       "start": 293402,
       "end": 293604,
       "confidence": 0.99995,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 293642,
       "end": 293748,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 293754,
       "end": 293876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "told",
       "start": 293898,
       "end": 294132,
       "confidence": 0.69931,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 294186,
       "end": 294448,
       "confidence": 0.99981,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 294464,
       "end": 294548,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 294554,
       "end": 294724,
       "confidence": 0.99998,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "fellow.",
       "start": 294762,
       "end": 295104,
       "confidence": 0.99038,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm,",
       "start": 295152,
       "end": 295808,
       "confidence": 0.98281,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 295900,
       "end": 295990,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pretty",
       "start": 295990,
       "end": 296372,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "well",
       "start": 296426,
       "end": 296644,
       "confidence": 0.99975,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "peeved",
       "start": 296682,
       "end": 297344,
       "confidence": 0.60489,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 297472,
       "end": 297812,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can't",
       "start": 297866,
       "end": 298144,
       "confidence": 0.54902,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 298192,
       "end": 298404,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "myself",
       "start": 298442,
       "end": 298788,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 298874,
       "end": 299124,
       "confidence": 0.74,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 299162,
       "end": 299796,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Also,",
       "start": 299978,
       "end": 300420,
       "confidence": 0.99273,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "saying",
       "start": 300490,
       "end": 300772,
       "confidence": 0.9999,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 300826,
       "end": 300996,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "15",
       "start": 301018,
       "end": 301312,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "minutes",
       "start": 301386,
       "end": 301672,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "later",
       "start": 301726,
       "end": 302040,
       "confidence": 0.99987,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "probably",
       "start": 302110,
       "end": 302488,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "wouldn't",
       "start": 302574,
       "end": 303060,
       "confidence": 0.5483,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "count",
       "start": 303140,
       "end": 303480,
       "confidence": 0.99968,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 303550,
       "end": 303736,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "very",
       "start": 303758,
       "end": 303992,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "much.",
       "start": 304046,
       "end": 304650,
       "confidence": 0.9995,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Seems",
       "start": 309340,
       "end": 309752,
       "confidence": 0.84507,
       "score": 7
     },
     {
       "speaker": "B",
       "text": "right",
       "start": 309806,
       "end": 310024,
       "confidence": 0.93,
       "score": 10
     },
     {
       "speaker": "B",
       "text": "now.",
       "start": 310062,
       "end": 310312,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "As",
       "start": 310366,
       "end": 310536,
       "confidence": 0.99471,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "if",
       "start": 310558,
       "end": 310648,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 310654,
       "end": 310836,
       "confidence": 0.99965,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying,",
       "start": 310868,
       "end": 311450,
       "confidence": 0.999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 312300,
       "end": 312712,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "just",
       "start": 312766,
       "end": 313176,
       "confidence": 0.99444,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "doubt",
       "start": 313278,
       "end": 313904,
       "confidence": 0.43809,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 313972,
       "end": 314156,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 314178,
       "end": 314316,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "could",
       "start": 314338,
       "end": 314476,
       "confidence": 0.99952,
       "score": 16
     },
     {
       "speaker": "B",
       "text": "put",
       "start": 314498,
       "end": 314636,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "B",
       "text": "on",
       "start": 314658,
       "end": 314844,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 314882,
       "end": 315036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "convincing",
       "start": 315058,
       "end": 315820,
       "confidence": 0.97307,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "act.",
       "start": 317520,
       "end": 318268,
       "confidence": 0.99981,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah,",
       "start": 318434,
       "end": 319004,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that's",
       "start": 319122,
       "end": 319496,
       "confidence": 0.99084,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 319528,
       "end": 319628,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 319634,
       "end": 319804,
       "confidence": 0.99992,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 319842,
       "end": 319996,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 320018,
       "end": 320156,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 320178,
       "end": 320364,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 320402,
       "end": 320990,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 325360,
       "end": 325676,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 325698,
       "end": 325836,
       "confidence": 0.99988,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 325858,
       "end": 325996,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "couldn't",
       "start": 326018,
       "end": 326216,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "put",
       "start": 326248,
       "end": 326396,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 326418,
       "end": 326556,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "100%",
       "start": 326578,
       "end": 327260,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "convincing",
       "start": 327330,
       "end": 327832,
       "confidence": 0.9996,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "one.",
       "start": 327896,
       "end": 328076,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 328098,
       "end": 328236,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 328258,
       "end": 328396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 328418,
       "end": 328556,
       "confidence": 0.56051,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 328578,
       "end": 328776,
       "confidence": 0.91368,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 328818,
       "end": 328976,
       "confidence": 0.99999,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 328998,
       "end": 329136,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 329158,
       "end": 329296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 329318,
       "end": 329456,
       "confidence": 0.99994,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 329478,
       "end": 329664,
       "confidence": 0.99987,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "put",
       "start": 329702,
       "end": 329856,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 329878,
       "end": 330064,
       "confidence": 0.78,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a,",
       "start": 330102,
       "end": 330120,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ah,",
       "start": 330120,
       "end": 330340,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "convincing",
       "start": 330662,
       "end": 331212,
       "confidence": 0.99826,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "enough",
       "start": 331276,
       "end": 331600,
       "confidence": 0.71537,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "one.",
       "start": 331670,
       "end": 332290,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 332980,
       "end": 333296,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 333318,
       "end": 333456,
       "confidence": 0.99945,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 333478,
       "end": 333616,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 333638,
       "end": 333776,
       "confidence": 0.99995,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 333798,
       "end": 333936,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wouldn't",
       "start": 333958,
       "end": 334108,
       "confidence": 0.99987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fool",
       "start": 334124,
       "end": 334396,
       "confidence": 0.91118,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "hardly",
       "start": 334428,
       "end": 334796,
       "confidence": 0.99987,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "anybody",
       "start": 334828,
       "end": 335168,
       "confidence": 0.99998,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 335254,
       "end": 335552,
       "confidence": 0.64,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 335606,
       "end": 336210,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But,",
       "start": 336660,
       "end": 337120,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 337120,
       "end": 337580,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 337580,
       "end": 337696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 337718,
       "end": 337916,
       "confidence": 0.47518,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 337948,
       "end": 338144,
       "confidence": 0.87232,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 338182,
       "end": 338336,
       "confidence": 0.91118,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 338358,
       "end": 338544,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 338582,
       "end": 338688,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 338694,
       "end": 338864,
       "confidence": 0.99998,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "fool",
       "start": 338902,
       "end": 339164,
       "confidence": 0.99997,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 339212,
       "end": 339810,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Because",
       "start": 340420,
       "end": 340832,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 340886,
       "end": 341068,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wouldn't",
       "start": 341094,
       "end": 341296,
       "confidence": 0.99978,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "remember.",
       "start": 341328,
       "end": 341956,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 342138,
       "end": 342870,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 343480,
       "end": 343844,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 343882,
       "end": 343988,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tendency",
       "start": 343994,
       "end": 344352,
       "confidence": 0.50372,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 344416,
       "end": 344596,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "consider",
       "start": 344618,
       "end": 344996,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 345098,
       "end": 345364,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 345402,
       "end": 345556,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 345578,
       "end": 345716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 345738,
       "end": 345876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "single",
       "start": 345898,
       "end": 346180,
       "confidence": 0.99994,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "track",
       "start": 346250,
       "end": 346532,
       "confidence": 0.99703,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "mind,",
       "start": 346586,
       "end": 346900,
       "confidence": 0.9998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sort",
       "start": 346970,
       "end": 347204,
       "confidence": 0.99993,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "of,",
       "start": 347242,
       "end": 347444,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 347482,
       "end": 347636,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 347658,
       "end": 348132,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 348266,
       "end": 348564,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 348602,
       "end": 348816,
       "confidence": 0.99926,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doing",
       "start": 348848,
       "end": 349044,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 349082,
       "end": 349236,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 349258,
       "end": 349444,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 349482,
       "end": 349780,
       "confidence": 0.99998,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 349850,
       "end": 350180,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 350250,
       "end": 350436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 350458,
       "end": 350656,
       "confidence": 0.99988,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doing",
       "start": 350688,
       "end": 350980,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 351050,
       "end": 351670,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 351980,
       "end": 352296,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "few",
       "start": 352318,
       "end": 352552,
       "confidence": 0.92943,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "brains",
       "start": 352606,
       "end": 352964,
       "confidence": 0.99977,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "I've",
       "start": 353012,
       "end": 353236,
       "confidence": 0.99704,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got.",
       "start": 353268,
       "end": 353560,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 353630,
       "end": 353768,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 353774,
       "end": 353944,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 353982,
       "end": 354136,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 354158,
       "end": 354344,
       "confidence": 0.99998,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "forget",
       "start": 354382,
       "end": 354772,
       "confidence": 0.99999,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 354836,
       "end": 355208,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 355294,
       "end": 355544,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "campaign",
       "start": 355582,
       "end": 356084,
       "confidence": 0.99985,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 356132,
       "end": 356296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 356318,
       "end": 356456,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 356478,
       "end": 356664,
       "confidence": 0.99866,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 356702,
       "end": 356904,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 356942,
       "end": 357192,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Or,",
       "start": 357246,
       "end": 357850,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 358960,
       "end": 359760,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kiss",
       "start": 359760,
       "end": 360036,
       "confidence": 0.9997,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 360068,
       "end": 360264,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "butt",
       "start": 360302,
       "end": 360516,
       "confidence": 0.98205,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 360548,
       "end": 360696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "however",
       "start": 360718,
       "end": 360952,
       "confidence": 0.99887,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 361006,
       "end": 361176,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want",
       "start": 361198,
       "end": 361336,
       "confidence": 0.51955,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 361358,
       "end": 361496,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "term",
       "start": 361518,
       "end": 361796,
       "confidence": 0.99789,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 361828,
       "end": 362410,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "You",
       "start": 363500,
       "end": 363816,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 363838,
       "end": 363928,
       "confidence": 0.99942,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 363934,
       "end": 364056,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 364078,
       "end": 364168,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 364174,
       "end": 364296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "cater",
       "start": 364318,
       "end": 364676,
       "confidence": 0.70564,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 364708,
       "end": 364856,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "him.",
       "start": 364878,
       "end": 365016,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Is",
       "start": 365038,
       "end": 365176,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 365198,
       "end": 365336,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 365358,
       "end": 365448,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you're",
       "start": 365454,
       "end": 365636,
       "confidence": 0.98731,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "saying?",
       "start": 365668,
       "end": 366296,
       "confidence": 0.99865,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 366478,
       "end": 366824,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "also,",
       "start": 366862,
       "end": 367172,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 367246,
       "end": 367436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "guess",
       "start": 367458,
       "end": 367596,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 367618,
       "end": 367816,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying",
       "start": 367848,
       "end": 368140,
       "confidence": 0.99999,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "you'd",
       "start": 368210,
       "end": 368536,
       "confidence": 0.95715,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "really",
       "start": 368568,
       "end": 368812,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 368866,
       "end": 369036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 369058,
       "end": 369148,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "be",
       "start": 369154,
       "end": 369276,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 369298,
       "end": 369436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "different",
       "start": 369458,
       "end": 369644,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 369682,
       "end": 369836,
       "confidence": 0.99999,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 369858,
       "end": 369996,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "person",
       "start": 370018,
       "end": 370252,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "B",
       "text": "than",
       "start": 370306,
       "end": 370524,
       "confidence": 0.5,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 370562,
       "end": 371196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "feel",
       "start": 371378,
       "end": 371724,
       "confidence": 0.99991,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "yourself",
       "start": 371762,
       "end": 372108,
       "confidence": 0.83543,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 372194,
       "end": 372444,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "be.",
       "start": 372482,
       "end": 372972,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'd",
       "start": 373106,
       "end": 373416,
       "confidence": 0.8822,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 373448,
       "end": 373548,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 373554,
       "end": 373676,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 373698,
       "end": 374270,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "false",
       "start": 374800,
       "end": 375256,
       "confidence": 0.79633,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 375288,
       "end": 375484,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 375522,
       "end": 375676,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 375698,
       "end": 375884,
       "confidence": 0.69,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 375922,
       "end": 376124,
       "confidence": 0.99997,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "myself",
       "start": 376162,
       "end": 376460,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 376530,
       "end": 376716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be.",
       "start": 376738,
       "end": 376924,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Oh,",
       "start": 376962,
       "end": 377164,
       "confidence": 0.47,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "false",
       "start": 377202,
       "end": 377576,
       "confidence": 0.50204,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to.",
       "start": 377608,
       "end": 377864,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 377922,
       "end": 378048,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 378054,
       "end": 378188,
       "confidence": 0.99986,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 378204,
       "end": 378384,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 378422,
       "end": 378624,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "phrase.",
       "start": 378662,
       "end": 379004,
       "confidence": 0.97513,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 379052,
       "end": 379168,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'd",
       "start": 379174,
       "end": 379388,
       "confidence": 0.99133,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 379404,
       "end": 379536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 379558,
       "end": 379648,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 379654,
       "end": 379824,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "different",
       "start": 379862,
       "end": 380112,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 380166,
       "end": 380336,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 380358,
       "end": 380496,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ordinarily",
       "start": 380518,
       "end": 381132,
       "confidence": 0.52866,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 381196,
       "end": 381810,
       "confidence": 0.99999,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 382420,
       "end": 382832,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "around",
       "start": 382886,
       "end": 383584,
       "confidence": 1.0,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "most",
       "start": 383782,
       "end": 384192,
       "confidence": 0.52337,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 384246,
       "end": 384512,
       "confidence": 0.85,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 384566,
       "end": 384736,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 384758,
       "end": 384944,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like.",
       "start": 384982,
       "end": 385570,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Maybe",
       "start": 386020,
       "end": 386480,
       "confidence": 0.58102,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "around",
       "start": 386550,
       "end": 386832,
       "confidence": 0.99994,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 386886,
       "end": 387104,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 387142,
       "end": 387344,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 387382,
       "end": 387584,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 387622,
       "end": 387776,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like.",
       "start": 387798,
       "end": 388464,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 388662,
       "end": 389024,
       "confidence": 0.49,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "certainly",
       "start": 389062,
       "end": 389360,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 389430,
       "end": 389712,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 389766,
       "end": 390128,
       "confidence": 0.99996,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "unrelaxed.",
       "start": 390214,
       "end": 391520,
       "confidence": 0.31423,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 392980,
       "end": 393560,
       "confidence": 0.51,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 393560,
       "end": 396360,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 396920,
       "end": 397284,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 397322,
       "end": 397524,
       "confidence": 0.98087,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 397562,
       "end": 397716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 397738,
       "end": 397876,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 397898,
       "end": 398180,
       "confidence": 0.71,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 398250,
       "end": 398484,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "effort.",
       "start": 398522,
       "end": 399300,
       "confidence": 0.99851,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 402620,
       "end": 402996,
       "confidence": 0.86233,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 403028,
       "end": 403176,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 403198,
       "end": 403336,
       "confidence": 0.99998,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "100%",
       "start": 403358,
       "end": 403992,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sure",
       "start": 404046,
       "end": 404264,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 404302,
       "end": 404516,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "willing",
       "start": 404548,
       "end": 404788,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 404804,
       "end": 404936,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 404958,
       "end": 405144,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "too",
       "start": 405182,
       "end": 405432,
       "confidence": 0.7,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wholehearted",
       "start": 405486,
       "end": 406116,
       "confidence": 0.70611,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 406148,
       "end": 406296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "effort.",
       "start": 406318,
       "end": 407000,
       "confidence": 0.99933,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Um,",
       "start": 408500,
       "end": 409020,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "when",
       "start": 409020,
       "end": 409256,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 409278,
       "end": 409752,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "stop",
       "start": 409886,
       "end": 410280,
       "confidence": 0.84952,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 410350,
       "end": 410536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "think",
       "start": 410558,
       "end": 410744,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "B",
       "text": "about",
       "start": 410782,
       "end": 411032,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this,",
       "start": 411086,
       "end": 411304,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 411342,
       "end": 411556,
       "confidence": 0.99918,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "not",
       "start": 411588,
       "end": 412170,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "positive",
       "start": 412620,
       "end": 413300,
       "confidence": 0.99987,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 413380,
       "end": 413624,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 413662,
       "end": 413876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "do",
       "start": 413918,
       "end": 414076,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "want",
       "start": 414098,
       "end": 414236,
       "confidence": 0.99899,
       "score": 16
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 414258,
       "end": 414396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "go",
       "start": 414418,
       "end": 414990,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "B",
       "text": "sort",
       "start": 416640,
       "end": 416956,
       "confidence": 0.99965,
       "score": 12
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 416978,
       "end": 417116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "strain",
       "start": 417138,
       "end": 417464,
       "confidence": 0.54573,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "yourself.",
       "start": 417512,
       "end": 418110,
       "confidence": 0.99961,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "To",
       "start": 419360,
       "end": 420108,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 420274,
       "end": 420604,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 420642,
       "end": 420844,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 420882,
       "end": 421084,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "better",
       "start": 421122,
       "end": 421420,
       "confidence": 0.99995,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 421490,
       "end": 421772,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 421826,
       "end": 422430,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 424400,
       "end": 424860,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 424860,
       "end": 431980,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 431980,
       "end": 432610,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 434580,
       "end": 434956,
       "confidence": 0.93595,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 434988,
       "end": 435184,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uncertain",
       "start": 435222,
       "end": 435756,
       "confidence": 0.53392,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 435788,
       "end": 436032,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that.",
       "start": 436086,
       "end": 436304,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 436342,
       "end": 436544,
       "confidence": 0.57,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 436582,
       "end": 436940,
       "confidence": 0.86475,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 437020,
       "end": 437264,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "certain",
       "start": 437302,
       "end": 437600,
       "confidence": 0.63704,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 437670,
       "end": 437856,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 437878,
       "end": 438016,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can't",
       "start": 438038,
       "end": 438284,
       "confidence": 0.97801,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anyway",
       "start": 438332,
       "end": 438930,
       "confidence": 0.99973,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 440260,
       "end": 440672,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 440726,
       "end": 440896,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "isn't",
       "start": 440918,
       "end": 441484,
       "confidence": 0.99967,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "will",
       "start": 441612,
       "end": 441856,
       "confidence": 0.91452,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 441878,
       "end": 442028,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 442054,
       "end": 442196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 442218,
       "end": 442356,
       "confidence": 0.99998,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 442378,
       "end": 442516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 442538,
       "end": 442724,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "The",
       "start": 442762,
       "end": 442916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing",
       "start": 442938,
       "end": 443076,
       "confidence": 0.99995,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "that's",
       "start": 443098,
       "end": 443296,
       "confidence": 0.97271,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 443328,
       "end": 443476,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 443498,
       "end": 443636,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "depend",
       "start": 443658,
       "end": 443988,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 444074,
       "end": 444324,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doing",
       "start": 444362,
       "end": 444948,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 445114,
       "end": 445444,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 445482,
       "end": 446116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "term",
       "start": 446298,
       "end": 446864,
       "confidence": 0.93178,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "cater",
       "start": 446912,
       "end": 447296,
       "confidence": 0.99755,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 447328,
       "end": 447476,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him,",
       "start": 447498,
       "end": 447684,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "which",
       "start": 447722,
       "end": 447924,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 447962,
       "end": 448260,
       "confidence": 0.57,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 448330,
       "end": 448516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "best",
       "start": 448538,
       "end": 448964,
       "confidence": 0.99999,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "phrase",
       "start": 449082,
       "end": 449504,
       "confidence": 0.99931,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 449552,
       "end": 449716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 449738,
       "end": 449876,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 449898,
       "end": 450084,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "of,",
       "start": 450122,
       "end": 450564,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 450682,
       "end": 450964,
       "confidence": 0.93724,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 451002,
       "end": 451156,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 451178,
       "end": 451328,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 451354,
       "end": 451544,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "done,",
       "start": 451582,
       "end": 452024,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say,",
       "start": 452142,
       "end": 452472,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "6",
       "start": 452526,
       "end": 452792,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "hours",
       "start": 452846,
       "end": 453160,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 453230,
       "end": 453416,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 453438,
       "end": 453576,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "eight,",
       "start": 453598,
       "end": 454170,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "four",
       "start": 454620,
       "end": 454984,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "days",
       "start": 455022,
       "end": 455320,
       "confidence": 0.9,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 455390,
       "end": 455576,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 455598,
       "end": 455784,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "five,",
       "start": 455822,
       "end": 456410,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 456640,
       "end": 458860,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "most",
       "start": 458860,
       "end": 459368,
       "confidence": 0.99748,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 459454,
       "end": 460090,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 461660,
       "end": 462072,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "months,",
       "start": 462126,
       "end": 462728,
       "confidence": 0.99583,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "month",
       "start": 462894,
       "end": 463224,
       "confidence": 0.60757,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "after",
       "start": 463262,
       "end": 463512,
       "confidence": 0.81052,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "month",
       "start": 463566,
       "end": 463832,
       "confidence": 0.98084,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "after",
       "start": 463886,
       "end": 464152,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "month.",
       "start": 464206,
       "end": 464760,
       "confidence": 0.94814,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It",
       "start": 464910,
       "end": 465176,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wouldn't",
       "start": 465198,
       "end": 465396,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 465428,
       "end": 465528,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 465534,
       "end": 465656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing",
       "start": 465678,
       "end": 465816,
       "confidence": 1.0,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 465838,
       "end": 465928,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 465934,
       "end": 466056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 466078,
       "end": 466216,
       "confidence": 0.99986,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 466238,
       "end": 466376,
       "confidence": 1.0,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 466398,
       "end": 466536,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sold",
       "start": 466558,
       "end": 466836,
       "confidence": 0.99987,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 466868,
       "end": 466968,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 466974,
       "end": 467096,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 467118,
       "end": 467208,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 467214,
       "end": 467336,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "go",
       "start": 467358,
       "end": 467496,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "back",
       "start": 467518,
       "end": 467656,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 467678,
       "end": 467780,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 467790,
       "end": 467964,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "myself,",
       "start": 468002,
       "end": 468590,
       "confidence": 0.99984,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 469640,
       "end": 469800,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 469800,
       "end": 470044,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 470082,
       "end": 470236,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 470258,
       "end": 470492,
       "confidence": 0.8128,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "myself",
       "start": 470546,
       "end": 470860,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 470930,
       "end": 471116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be.",
       "start": 471138,
       "end": 471160,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "M.",
       "start": 471160,
       "end": 471320,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It",
       "start": 471362,
       "end": 471516,
       "confidence": 0.71,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 471538,
       "end": 471676,
       "confidence": 0.9998,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 471698,
       "end": 471836,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 471858,
       "end": 471948,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing",
       "start": 471954,
       "end": 472124,
       "confidence": 1.0,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 472162,
       "end": 472316,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 472338,
       "end": 472524,
       "confidence": 0.99995,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 472562,
       "end": 472716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 472738,
       "end": 472876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "keep",
       "start": 472898,
       "end": 473132,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "up",
       "start": 473186,
       "end": 473356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 473378,
       "end": 473612,
       "confidence": 0.84394,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 473666,
       "end": 473836,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "soon",
       "start": 473858,
       "end": 474044,
       "confidence": 0.9999,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 474082,
       "end": 474236,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 474258,
       "end": 474396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 474418,
       "end": 474556,
       "confidence": 0.99999,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 474578,
       "end": 474764,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 474802,
       "end": 475388,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 475554,
       "end": 475884,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 475922,
       "end": 476172,
       "confidence": 0.99994,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "myself",
       "start": 476226,
       "end": 476552,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 476626,
       "end": 476816,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be,",
       "start": 476838,
       "end": 477072,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 477126,
       "end": 477344,
       "confidence": 0.99951,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 477382,
       "end": 477584,
       "confidence": 0.81518,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "not,",
       "start": 477622,
       "end": 477700,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 477700,
       "end": 477880,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 477880,
       "end": 478112,
       "confidence": 0.6,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 478166,
       "end": 478384,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 478422,
       "end": 478624,
       "confidence": 0.99994,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "so",
       "start": 478662,
       "end": 478864,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "well",
       "start": 478902,
       "end": 479104,
       "confidence": 0.99967,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 479142,
       "end": 479344,
       "confidence": 0.69,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 479382,
       "end": 479584,
       "confidence": 0.52,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "approximately",
       "start": 479622,
       "end": 480252,
       "confidence": 0.75035,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 480316,
       "end": 480544,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 480582,
       "end": 480736,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 480758,
       "end": 480944,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "now.",
       "start": 480982,
       "end": 481570,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 486660,
       "end": 487160,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 487160,
       "end": 489920,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 489920,
       "end": 490212,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time,",
       "start": 490266,
       "end": 490484,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 490522,
       "end": 490676,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 490698,
       "end": 490896,
       "confidence": 0.97555,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 490928,
       "end": 491316,
       "confidence": 0.99995,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "very",
       "start": 491418,
       "end": 491732,
       "confidence": 0.98677,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ambitious",
       "start": 491786,
       "end": 492304,
       "confidence": 0.9999,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 492352,
       "end": 492564,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 492602,
       "end": 492804,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "after",
       "start": 492842,
       "end": 493044,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "another",
       "start": 493082,
       "end": 493380,
       "confidence": 0.99976,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "job.",
       "start": 493450,
       "end": 493924,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 494042,
       "end": 494276,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 494298,
       "end": 494448,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 494464,
       "end": 494692,
       "confidence": 0.54,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "doing",
       "start": 494746,
       "end": 495012,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 495066,
       "end": 495670,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "very",
       "start": 496280,
       "end": 496644,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "much.",
       "start": 496682,
       "end": 497270,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 498920,
       "end": 499236,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 499258,
       "end": 499396,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 499418,
       "end": 499556,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "very",
       "start": 499578,
       "end": 499764,
       "confidence": 0.99686,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "much",
       "start": 499802,
       "end": 500004,
       "confidence": 0.99999,
       "score": 15
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 500042,
       "end": 500336,
       "confidence": 0.61143,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 500368,
       "end": 500564,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 500602,
       "end": 501190,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Um,",
       "start": 501820,
       "end": 504700,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 505340,
       "end": 505752,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "really",
       "start": 505806,
       "end": 506410,
       "confidence": 0.99948,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "sound",
       "start": 507260,
       "end": 507720,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "now",
       "start": 507790,
       "end": 507976,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "as",
       "start": 507998,
       "end": 508136,
       "confidence": 0.99061,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "if",
       "start": 508158,
       "end": 508296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 508318,
       "end": 508468,
       "confidence": 0.99975,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying",
       "start": 508484,
       "end": 508664,
       "confidence": 0.99997,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 508702,
       "end": 508904,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "are",
       "start": 508942,
       "end": 509144,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "up",
       "start": 509182,
       "end": 509336,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "against",
       "start": 509358,
       "end": 509880,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 510030,
       "end": 510392,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "choice",
       "start": 510446,
       "end": 510772,
       "confidence": 0.86521,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 510836,
       "end": 511450,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "living",
       "start": 513180,
       "end": 513592,
       "confidence": 0.99999,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "with",
       "start": 513646,
       "end": 513876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "him",
       "start": 513918,
       "end": 514556,
       "confidence": 0.71,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "comfortably.",
       "start": 514738,
       "end": 515740,
       "confidence": 0.99358,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Which.",
       "start": 517680,
       "end": 518044,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Means",
       "start": 518082,
       "end": 518380,
       "confidence": 0.99999,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "being",
       "start": 518450,
       "end": 519070,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "something",
       "start": 519920,
       "end": 520380,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 520450,
       "end": 520684,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "don't",
       "start": 520722,
       "end": 520984,
       "confidence": 0.9962,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "really",
       "start": 521032,
       "end": 521580,
       "confidence": 0.99999,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "want",
       "start": 521730,
       "end": 521996,
       "confidence": 0.99932,
       "score": 16
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 522018,
       "end": 522156,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "be",
       "start": 522178,
       "end": 522364,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "or",
       "start": 522402,
       "end": 522604,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "like",
       "start": 522642,
       "end": 522844,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 522882,
       "end": 523084,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "be,",
       "start": 523122,
       "end": 523710,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "or",
       "start": 524160,
       "end": 524620,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "looking",
       "start": 524690,
       "end": 524972,
       "confidence": 0.62,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "for",
       "start": 525026,
       "end": 525196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "another",
       "start": 525218,
       "end": 525500,
       "confidence": 0.99989,
       "score": 6
     },
     {
       "speaker": "B",
       "text": "job,",
       "start": 525570,
       "end": 525900,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "which,",
       "start": 525970,
       "end": 526552,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "by",
       "start": 526706,
       "end": 527072,
       "confidence": 0.96198,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "God,",
       "start": 527126,
       "end": 527344,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 527382,
       "end": 527584,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "certainly",
       "start": 527622,
       "end": 527872,
       "confidence": 0.99993,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "don't",
       "start": 527926,
       "end": 528156,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "want",
       "start": 528188,
       "end": 528288,
       "confidence": 0.9992,
       "score": 16
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 528294,
       "end": 528416,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 528438,
       "end": 528576,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 528598,
       "end": 528688,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "go",
       "start": 528694,
       "end": 528864,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "B",
       "text": "through.",
       "start": 528902,
       "end": 529490,
       "confidence": 0.9973,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That's",
       "start": 531060,
       "end": 531516,
       "confidence": 0.99547,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "right.",
       "start": 531548,
       "end": 532128,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 532294,
       "end": 532576,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 532598,
       "end": 532924,
       "confidence": 0.63477,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "saying",
       "start": 532972,
       "end": 533472,
       "confidence": 0.99992,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "further,",
       "start": 533606,
       "end": 534284,
       "confidence": 0.97013,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 534412,
       "end": 534800,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 534870,
       "end": 535152,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "true.",
       "start": 535206,
       "end": 535810,
       "confidence": 0.9997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 536760,
       "end": 537740,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 537740,
       "end": 538124,
       "confidence": 0.95807,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "either",
       "start": 538172,
       "end": 538480,
       "confidence": 0.99999,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 538550,
       "end": 538688,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 538694,
       "end": 538864,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 538902,
       "end": 539116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 539158,
       "end": 539316,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "look",
       "start": 539338,
       "end": 539524,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 539562,
       "end": 539716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "another",
       "start": 539738,
       "end": 540020,
       "confidence": 0.99993,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "job",
       "start": 540090,
       "end": 540710,
       "confidence": 0.99996,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 541480,
       "end": 541940,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "start",
       "start": 542010,
       "end": 542292,
       "confidence": 0.99994,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 542346,
       "end": 542564,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cater",
       "start": 542602,
       "end": 542944,
       "confidence": 0.99762,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 542992,
       "end": 543156,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him,",
       "start": 543178,
       "end": 543750,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 544200,
       "end": 544564,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 544602,
       "end": 544756,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "won't",
       "start": 544778,
       "end": 545008,
       "confidence": 0.58872,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 545024,
       "end": 545156,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "given",
       "start": 545178,
       "end": 545364,
       "confidence": 0.99955,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 545402,
       "end": 545556,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "choice.",
       "start": 545578,
       "end": 545872,
       "confidence": 0.54288,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He'll",
       "start": 545936,
       "end": 546208,
       "confidence": 0.99895,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 546224,
       "end": 546356,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "having",
       "start": 546378,
       "end": 546612,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 546666,
       "end": 546836,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "look",
       "start": 546858,
       "end": 547044,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 547082,
       "end": 547236,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 547258,
       "end": 547830,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "This",
       "start": 549640,
       "end": 550052,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "is",
       "start": 550106,
       "end": 550276,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "being",
       "start": 550298,
       "end": 550532,
       "confidence": 0.9262,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "forced",
       "start": 550586,
       "end": 550944,
       "confidence": 0.9996,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "on",
       "start": 550992,
       "end": 551204,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you.",
       "start": 551242,
       "end": 551830,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah,",
       "start": 552840,
       "end": 553252,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "well,",
       "start": 553306,
       "end": 553572,
       "confidence": 0.77463,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 553626,
       "end": 553808,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 553824,
       "end": 553956,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sure",
       "start": 553978,
       "end": 554164,
       "confidence": 0.99999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 554202,
       "end": 554404,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "knows",
       "start": 554442,
       "end": 554736,
       "confidence": 0.99978,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 554768,
       "end": 555348,
       "confidence": 0.55,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even,",
       "start": 555514,
       "end": 556036,
       "confidence": 0.99832,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 556138,
       "end": 556356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 556378,
       "end": 556564,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 556602,
       "end": 556756,
       "confidence": 0.99992,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 556778,
       "end": 557204,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 557322,
       "end": 557568,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bet",
       "start": 557594,
       "end": 557784,
       "confidence": 0.95421,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 557822,
       "end": 557976,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 557998,
       "end": 558088,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "money",
       "start": 558094,
       "end": 558264,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 558302,
       "end": 558504,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 558542,
       "end": 558744,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 558782,
       "end": 558936,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 558958,
       "end": 559530,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 560380,
       "end": 560696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "get",
       "start": 560718,
       "end": 560856,
       "confidence": 0.9996,
       "score": 37
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 560878,
       "end": 561016,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 561038,
       "end": 561188,
       "confidence": 0.64506,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying",
       "start": 561204,
       "end": 561770,
       "confidence": 0.86479,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 562380,
       "end": 562744,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "can",
       "start": 562782,
       "end": 562936,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "see",
       "start": 562958,
       "end": 563144,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 563182,
       "end": 563432,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "coming,",
       "start": 563486,
       "end": 564040,
       "confidence": 0.99591,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "it's",
       "start": 564190,
       "end": 564564,
       "confidence": 0.89595,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "building",
       "start": 564612,
       "end": 564920,
       "confidence": 0.99994,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "up.",
       "start": 564990,
       "end": 565020,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh",
       "start": 565020,
       "end": 565340,
       "confidence": 0.9,
       "score": 96
     },
     {
       "speaker": "A",
       "text": "uh.",
       "start": 565420,
       "end": 565740,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Remember",
       "start": 565740,
       "end": 566084,
       "confidence": 0.99998,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 566142,
       "end": 566316,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "watched",
       "start": 566338,
       "end": 566568,
       "confidence": 0.98882,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 566584,
       "end": 566716,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 566738,
       "end": 566924,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "foreman",
       "start": 566962,
       "end": 567528,
       "confidence": 0.99625,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 567624,
       "end": 567884,
       "confidence": 0.98851,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "tired",
       "start": 567922,
       "end": 568680,
       "confidence": 0.75631,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 568840,
       "end": 569164,
       "confidence": 0.44,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "day",
       "start": 569202,
       "end": 569452,
       "confidence": 1.0,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "after",
       "start": 569506,
       "end": 569772,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "day,",
       "start": 569826,
       "end": 570044,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "month",
       "start": 570082,
       "end": 570332,
       "confidence": 0.78194,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "after",
       "start": 570386,
       "end": 570652,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "month.",
       "start": 570706,
       "end": 570924,
       "confidence": 0.99435,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 570962,
       "end": 571116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 571138,
       "end": 571324,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 571362,
       "end": 571516,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "it,",
       "start": 571538,
       "end": 572110,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 572880,
       "end": 573292,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it's",
       "start": 573346,
       "end": 573576,
       "confidence": 0.99788,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 573608,
       "end": 573756,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 573778,
       "end": 573916,
       "confidence": 0.62,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 573938,
       "end": 574172,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 574226,
       "end": 574492,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 574546,
       "end": 574776,
       "confidence": 0.99183,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 574808,
       "end": 575004,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 575042,
       "end": 575196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same,",
       "start": 575218,
       "end": 575692,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 575826,
       "end": 576172,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "basically",
       "start": 576226,
       "end": 576636,
       "confidence": 0.99995,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "it's",
       "start": 576738,
       "end": 577016,
       "confidence": 0.98136,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 577048,
       "end": 577196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same.",
       "start": 577218,
       "end": 577560,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "You",
       "start": 577650,
       "end": 577808,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "can",
       "start": 577814,
       "end": 577984,
       "confidence": 0.5311,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "see",
       "start": 578022,
       "end": 578224,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 578262,
       "end": 578464,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "shaping",
       "start": 578502,
       "end": 578924,
       "confidence": 0.97963,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "up",
       "start": 578972,
       "end": 579184,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "for",
       "start": 579222,
       "end": 579376,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "yourself.",
       "start": 579398,
       "end": 579970,
       "confidence": 0.99883,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Mhm.",
       "start": 580200,
       "end": 581480,
       "confidence": 0.9741750955581665,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That,",
       "start": 581480,
       "end": 581820,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 581820,
       "end": 581980,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 582038,
       "end": 582304,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 582342,
       "end": 582592,
       "confidence": 0.76542,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 582646,
       "end": 582864,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 582902,
       "end": 583104,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "act",
       "start": 583142,
       "end": 583344,
       "confidence": 0.99998,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "different",
       "start": 583382,
       "end": 583632,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 583686,
       "end": 583856,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 583878,
       "end": 584064,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "act",
       "start": 584102,
       "end": 584304,
       "confidence": 0.99955,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "now",
       "start": 584342,
       "end": 584592,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 584646,
       "end": 584816,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 584838,
       "end": 584976,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want",
       "start": 584998,
       "end": 585136,
       "confidence": 0.99453,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 585158,
       "end": 585248,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "stay",
       "start": 585254,
       "end": 585424,
       "confidence": 0.86153,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 585462,
       "end": 585664,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 585702,
       "end": 585856,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 585878,
       "end": 586064,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 586102,
       "end": 586304,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 586342,
       "end": 586930,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 588420,
       "end": 589170,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 592680,
       "end": 593044,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 593082,
       "end": 593236,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there's",
       "start": 593258,
       "end": 593488,
       "confidence": 0.99982,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 593504,
       "end": 593636,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "further",
       "start": 593658,
       "end": 594032,
       "confidence": 0.99966,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing.",
       "start": 594096,
       "end": 594710,
       "confidence": 0.99892,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um.",
       "start": 596820,
       "end": 598220,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It",
       "start": 598220,
       "end": 598356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "isn't",
       "start": 598378,
       "end": 598704,
       "confidence": 0.87618,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fair",
       "start": 598752,
       "end": 599012,
       "confidence": 0.99999,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 599066,
       "end": 599284,
       "confidence": 0.78,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 599322,
       "end": 599524,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 599562,
       "end": 599716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 599738,
       "end": 600016,
       "confidence": 0.99932,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 600048,
       "end": 600148,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 600154,
       "end": 600468,
       "confidence": 0.99991,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "exactly,",
       "start": 600554,
       "end": 601190,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 603420,
       "end": 604170,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 605580,
       "end": 605896,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 605918,
       "end": 606056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 606078,
       "end": 606216,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 606238,
       "end": 606424,
       "confidence": 0.99997,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "deal",
       "start": 606462,
       "end": 606760,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 606830,
       "end": 607450,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 608220,
       "end": 608536,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fellow",
       "start": 608558,
       "end": 608916,
       "confidence": 0.64783,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 608948,
       "end": 609048,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "did",
       "start": 609054,
       "end": 609224,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 609262,
       "end": 609464,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "for,",
       "start": 609502,
       "end": 609752,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 609806,
       "end": 609976,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 609998,
       "end": 610088,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "long",
       "start": 610094,
       "end": 610312,
       "confidence": 0.99998,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "time.",
       "start": 610366,
       "end": 610970,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Only",
       "start": 613760,
       "end": 614220,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 614290,
       "end": 614572,
       "confidence": 0.99983,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is,",
       "start": 614626,
       "end": 615180,
       "confidence": 0.56,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "from",
       "start": 615330,
       "end": 615644,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 615682,
       "end": 615884,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "viewpoint,",
       "start": 615922,
       "end": 616472,
       "confidence": 0.96541,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 616536,
       "end": 616764,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "better",
       "start": 616802,
       "end": 617052,
       "confidence": 0.99999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "man",
       "start": 617106,
       "end": 617324,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 617362,
       "end": 617564,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 617602,
       "end": 617756,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one,",
       "start": 617778,
       "end": 618204,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 618322,
       "end": 618700,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 618770,
       "end": 619100,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "adjusted",
       "start": 619170,
       "end": 619784,
       "confidence": 0.99135,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "man.",
       "start": 619832,
       "end": 620430,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "The",
       "start": 620880,
       "end": 621244,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 621282,
       "end": 621484,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fellow",
       "start": 621522,
       "end": 621816,
       "confidence": 0.99877,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 621848,
       "end": 622044,
       "confidence": 0.99848,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 622082,
       "end": 622284,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 622322,
       "end": 622572,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "caricature",
       "start": 622626,
       "end": 623192,
       "confidence": 0.57186,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 623256,
       "end": 623484,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "exaggeration",
       "start": 623522,
       "end": 624280,
       "confidence": 0.99898,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 624360,
       "end": 624604,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 624642,
       "end": 624844,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fellow.",
       "start": 624882,
       "end": 625580,
       "confidence": 0.90359,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But,",
       "start": 626420,
       "end": 626860,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 626860,
       "end": 628860,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 628860,
       "end": 629104,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fellow",
       "start": 629142,
       "end": 629612,
       "confidence": 0.43937,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 629676,
       "end": 630240,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 630390,
       "end": 630752,
       "confidence": 0.97903,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 630806,
       "end": 630928,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bit",
       "start": 630934,
       "end": 631200,
       "confidence": 0.91118,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 631270,
       "end": 631504,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 631542,
       "end": 631696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 631718,
       "end": 632000,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 632070,
       "end": 632304,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "many",
       "start": 632342,
       "end": 632592,
       "confidence": 0.99995,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "ways.",
       "start": 632646,
       "end": 633250,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 634660,
       "end": 635072,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 635126,
       "end": 635296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 635318,
       "end": 635552,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 635606,
       "end": 635824,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 635862,
       "end": 636160,
       "confidence": 0.99893,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "both",
       "start": 636230,
       "end": 636656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "types",
       "start": 636758,
       "end": 637680,
       "confidence": 0.99893,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 638100,
       "end": 638464,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 638502,
       "end": 638704,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 638742,
       "end": 639004,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "sister",
       "start": 639062,
       "end": 639376,
       "confidence": 0.99986,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 639408,
       "end": 639556,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mine",
       "start": 639578,
       "end": 639824,
       "confidence": 0.97223,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 639872,
       "end": 640084,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "raised",
       "start": 640122,
       "end": 640432,
       "confidence": 0.7513,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 640496,
       "end": 640868,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 640954,
       "end": 641252,
       "confidence": 0.62,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 641306,
       "end": 641572,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 641626,
       "end": 641844,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 641882,
       "end": 642036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "exaggeration",
       "start": 642058,
       "end": 642896,
       "confidence": 0.99868,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 643008,
       "end": 643284,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 643322,
       "end": 643476,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 643498,
       "end": 643636,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 643658,
       "end": 644230,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Now,",
       "start": 646360,
       "end": 646840,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 646840,
       "end": 649080,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "here's",
       "start": 649640,
       "end": 649968,
       "confidence": 0.9998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 649984,
       "end": 650116,
       "confidence": 0.57,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing",
       "start": 650138,
       "end": 650276,
       "confidence": 0.99997,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 650298,
       "end": 650484,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "really,",
       "start": 650522,
       "end": 650772,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 650826,
       "end": 650996,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "am",
       "start": 651018,
       "end": 651156,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "practically",
       "start": 651178,
       "end": 651632,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "superstitious",
       "start": 651696,
       "end": 652512,
       "confidence": 0.99603,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "about.",
       "start": 652576,
       "end": 652948,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "How",
       "start": 653034,
       "end": 653332,
       "confidence": 0.95304,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 653386,
       "end": 653616,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 653658,
       "end": 653912,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 653966,
       "end": 654136,
       "confidence": 0.99997,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 654158,
       "end": 654296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "contact",
       "start": 654318,
       "end": 654648,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 654734,
       "end": 654936,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "these",
       "start": 654958,
       "end": 655144,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 655182,
       "end": 655336,
       "confidence": 1.0,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 655358,
       "end": 655448,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people?",
       "start": 655454,
       "end": 656010,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 656620,
       "end": 656984,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "hope",
       "start": 657022,
       "end": 657224,
       "confidence": 0.99994,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 657262,
       "end": 657464,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "God",
       "start": 657502,
       "end": 657704,
       "confidence": 0.99988,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 657742,
       "end": 657896,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "world",
       "start": 657918,
       "end": 658152,
       "confidence": 0.91732,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "isn't",
       "start": 658206,
       "end": 658436,
       "confidence": 0.9965,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "filled",
       "start": 658468,
       "end": 658708,
       "confidence": 0.99744,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 658724,
       "end": 658904,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them,",
       "start": 658942,
       "end": 659624,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 659822,
       "end": 660232,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "how",
       "start": 660286,
       "end": 660456,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "much.",
       "start": 660478,
       "end": 660712,
       "confidence": 0.95791,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "On",
       "start": 660766,
       "end": 660936,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 660958,
       "end": 661096,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "contrary,",
       "start": 661118,
       "end": 661892,
       "confidence": 0.99966,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that's",
       "start": 662036,
       "end": 662356,
       "confidence": 0.99864,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one,",
       "start": 662388,
       "end": 662920,
       "confidence": 0.7,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 663060,
       "end": 663160,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 663160,
       "end": 663432,
       "confidence": 0.98,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 663486,
       "end": 663656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "looking",
       "start": 663678,
       "end": 663864,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 663902,
       "end": 664056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 664078,
       "end": 664648,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "On",
       "start": 664814,
       "end": 665096,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 665118,
       "end": 665208,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 665214,
       "end": 665384,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way,",
       "start": 665422,
       "end": 665624,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "how",
       "start": 665662,
       "end": 665816,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "much",
       "start": 665838,
       "end": 665976,
       "confidence": 1.0,
       "score": 15
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 665998,
       "end": 666136,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 666158,
       "end": 666344,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 666382,
       "end": 666536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 666558,
       "end": 666648,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mirror",
       "start": 666654,
       "end": 666880,
       "confidence": 0.99962,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 666900,
       "end": 667036,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 667058,
       "end": 667196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 667218,
       "end": 667356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 667378,
       "end": 667516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 667538,
       "end": 667676,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 667698,
       "end": 667884,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 667922,
       "end": 668076,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "makes",
       "start": 668098,
       "end": 668284,
       "confidence": 0.99998,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 668322,
       "end": 668524,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "treat",
       "start": 668562,
       "end": 668812,
       "confidence": 0.99999,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 668866,
       "end": 669036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 669058,
       "end": 669292,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way?",
       "start": 669346,
       "end": 669950,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "What's",
       "start": 670640,
       "end": 671048,
       "confidence": 0.82613,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 671064,
       "end": 671196,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "matter",
       "start": 671218,
       "end": 671404,
       "confidence": 0.99985,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 671442,
       "end": 671644,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 671682,
       "end": 671932,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 671986,
       "end": 672204,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "situations",
       "start": 672242,
       "end": 672824,
       "confidence": 0.63703,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 672872,
       "end": 673084,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 673122,
       "end": 673324,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 673362,
       "end": 673612,
       "confidence": 0.51,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "this?",
       "start": 673666,
       "end": 674220,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "You're",
       "start": 674370,
       "end": 674696,
       "confidence": 0.48459,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 674728,
       "end": 674828,
       "confidence": 0.99938,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 674834,
       "end": 674956,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying",
       "start": 674978,
       "end": 675550,
       "confidence": 0.99963,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 676340,
       "end": 676656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 676678,
       "end": 676816,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "been",
       "start": 676838,
       "end": 677024,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "through",
       "start": 677062,
       "end": 677312,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 677366,
       "end": 677536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 677558,
       "end": 677696,
       "confidence": 0.99999,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 677718,
       "end": 677904,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "relation",
       "start": 677942,
       "end": 678380,
       "confidence": 0.94201,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "before.",
       "start": 678460,
       "end": 679136,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "To",
       "start": 679318,
       "end": 679616,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 679638,
       "end": 679824,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 679862,
       "end": 680016,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 680038,
       "end": 680176,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 680198,
       "end": 680336,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "only",
       "start": 680358,
       "end": 680592,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 680646,
       "end": 680816,
       "confidence": 0.99995,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 680838,
       "end": 680976,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "relation",
       "start": 680998,
       "end": 681324,
       "confidence": 0.99951,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 681372,
       "end": 681536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 681558,
       "end": 681696,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ever",
       "start": 681718,
       "end": 681904,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "lived",
       "start": 681942,
       "end": 682640,
       "confidence": 0.81285,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "with.",
       "start": 683940,
       "end": 684352,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Power",
       "start": 684406,
       "end": 684672,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "figures.",
       "start": 684726,
       "end": 685600,
       "confidence": 0.99621,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 686740,
       "end": 687152,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "either",
       "start": 687206,
       "end": 687810,
       "confidence": 0.99984,
       "score": 8
     },
     {
       "speaker": "B",
       "text": "somehow",
       "start": 690280,
       "end": 690944,
       "confidence": 0.99985,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "you've",
       "start": 690992,
       "end": 691216,
       "confidence": 0.95785,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "gotten",
       "start": 691248,
       "end": 691728,
       "confidence": 0.51953,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "mixed",
       "start": 691824,
       "end": 692256,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "up",
       "start": 692288,
       "end": 692484,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "with",
       "start": 692522,
       "end": 693108,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "power",
       "start": 693274,
       "end": 693748,
       "confidence": 0.53,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "figures",
       "start": 693834,
       "end": 694496,
       "confidence": 0.66525,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "of,",
       "start": 694608,
       "end": 694640,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "uh,",
       "start": 694640,
       "end": 694840,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 694922,
       "end": 695172,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind.",
       "start": 695226,
       "end": 695828,
       "confidence": 0.99972,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Or",
       "start": 695994,
       "end": 696710,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 697800,
       "end": 698212,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 698266,
       "end": 698484,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 698522,
       "end": 698724,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 698762,
       "end": 698964,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 699002,
       "end": 699204,
       "confidence": 0.99342,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 699242,
       "end": 699396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 699418,
       "end": 699556,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "were",
       "start": 699578,
       "end": 699764,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 699802,
       "end": 700052,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind.",
       "start": 700106,
       "end": 700420,
       "confidence": 0.88428,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "What",
       "start": 700490,
       "end": 700676,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 700698,
       "end": 700884,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "hell",
       "start": 700922,
       "end": 701124,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "about",
       "start": 701162,
       "end": 701460,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 701530,
       "end": 702150,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "makes",
       "start": 703480,
       "end": 703892,
       "confidence": 0.99939,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "them",
       "start": 703946,
       "end": 704596,
       "confidence": 0.55,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "take",
       "start": 704778,
       "end": 705136,
       "confidence": 0.99996,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "this?",
       "start": 705178,
       "end": 705770,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Is",
       "start": 706780,
       "end": 707144,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 707182,
       "end": 707336,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 707358,
       "end": 707496,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 707518,
       "end": 707704,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 707742,
       "end": 707944,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "treat",
       "start": 707982,
       "end": 708280,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "them,",
       "start": 708350,
       "end": 708776,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 708878,
       "end": 709144,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "every",
       "start": 709182,
       "end": 709432,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "power",
       "start": 709486,
       "end": 709752,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "figure",
       "start": 709806,
       "end": 710120,
       "confidence": 0.99996,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 710190,
       "end": 710376,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "will",
       "start": 710398,
       "end": 710536,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 710558,
       "end": 710696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "around?",
       "start": 710718,
       "end": 710952,
       "confidence": 0.99784,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Because",
       "start": 711006,
       "end": 711272,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "remember,",
       "start": 711326,
       "end": 711592,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 711646,
       "end": 711768,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 711774,
       "end": 711848,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "back",
       "start": 711854,
       "end": 711976,
       "confidence": 0.99999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 711998,
       "end": 712136,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "our",
       "start": 712158,
       "end": 712296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mind",
       "start": 712318,
       "end": 712504,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "here,",
       "start": 712542,
       "end": 712696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "we're",
       "start": 712718,
       "end": 712868,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "looking",
       "start": 712884,
       "end": 713064,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 713102,
       "end": 713256,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "another",
       "start": 713278,
       "end": 713512,
       "confidence": 0.99999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "job.",
       "start": 713566,
       "end": 713784,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 713822,
       "end": 713988,
       "confidence": 0.99954,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 714004,
       "end": 714100,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 714110,
       "end": 714188,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 714194,
       "end": 714364,
       "confidence": 0.97,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 714402,
       "end": 714556,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "somebody",
       "start": 714578,
       "end": 714812,
       "confidence": 0.99994,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "else.",
       "start": 714866,
       "end": 715470,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "From",
       "start": 718880,
       "end": 719244,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "here",
       "start": 719282,
       "end": 719484,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "on,",
       "start": 719522,
       "end": 719772,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "your",
       "start": 719826,
       "end": 719996,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "task",
       "start": 720018,
       "end": 720376,
       "confidence": 0.75,
       "score": 1
     },
     {
       "speaker": "D",
       "text": "is",
       "start": 720408,
       "end": 720604,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "to",
       "start": 720642,
       "end": 720796,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "respond",
       "start": 720818,
       "end": 721144,
       "confidence": 0.99983,
       "score": 2
     },
     {
       "speaker": "D",
       "text": "to",
       "start": 721192,
       "end": 721356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "the",
       "start": 721378,
       "end": 721516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "client.",
       "start": 721538,
       "end": 722220,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "After",
       "start": 722880,
       "end": 723244,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "the",
       "start": 723282,
       "end": 723436,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "client",
       "start": 723458,
       "end": 723784,
       "confidence": 0.79,
       "score": 3
     },
     {
       "speaker": "D",
       "text": "has",
       "start": 723832,
       "end": 723996,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "made",
       "start": 724018,
       "end": 724204,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "D",
       "text": "a",
       "start": 724242,
       "end": 724396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "response,",
       "start": 724418,
       "end": 724824,
       "confidence": 0.75903,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "there",
       "start": 724872,
       "end": 725036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "will",
       "start": 725058,
       "end": 725196,
       "confidence": 0.9937,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "be",
       "start": 725218,
       "end": 725356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "a",
       "start": 725378,
       "end": 725516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "22nd",
       "start": 725538,
       "end": 726060,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "D",
       "text": "interval",
       "start": 726130,
       "end": 726616,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "D",
       "text": "in",
       "start": 726648,
       "end": 726796,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "which",
       "start": 726818,
       "end": 726968,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "you",
       "start": 726994,
       "end": 727136,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "can",
       "start": 727158,
       "end": 727296,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "make",
       "start": 727318,
       "end": 727456,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "D",
       "text": "your",
       "start": 727478,
       "end": 727664,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "response.",
       "start": 727702,
       "end": 728716,
       "confidence": 0.95312,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "After",
       "start": 728908,
       "end": 729312,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "20",
       "start": 729366,
       "end": 729632,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "D",
       "text": "seconds,",
       "start": 729686,
       "end": 730156,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "you",
       "start": 730188,
       "end": 730336,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "will",
       "start": 730358,
       "end": 730544,
       "confidence": 0.99044,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "hear",
       "start": 730582,
       "end": 730736,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "D",
       "text": "the",
       "start": 730758,
       "end": 730896,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "counselor's",
       "start": 730918,
       "end": 731564,
       "confidence": 0.93502,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "actual",
       "start": 731612,
       "end": 731968,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "D",
       "text": "response,",
       "start": 732054,
       "end": 732892,
       "confidence": 0.75204,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "followed",
       "start": 733036,
       "end": 733548,
       "confidence": 0.51955,
       "score": 1
     },
     {
       "speaker": "D",
       "text": "by",
       "start": 733564,
       "end": 733696,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "a",
       "start": 733718,
       "end": 733856,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "new",
       "start": 733878,
       "end": 734016,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "D",
       "text": "client",
       "start": 734038,
       "end": 734364,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "D",
       "text": "response,",
       "start": 734412,
       "end": 735004,
       "confidence": 0.88298,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "to",
       "start": 735052,
       "end": 735216,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "which",
       "start": 735238,
       "end": 735376,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "you",
       "start": 735398,
       "end": 735536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "will",
       "start": 735558,
       "end": 735696,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "in",
       "start": 735718,
       "end": 735856,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "turn",
       "start": 735878,
       "end": 736160,
       "confidence": 0.99998,
       "score": 2
     },
     {
       "speaker": "D",
       "text": "respond.",
       "start": 736230,
       "end": 737040,
       "confidence": 0.98027,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "You",
       "start": 738260,
       "end": 738624,
       "confidence": 0.53,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "will",
       "start": 738662,
       "end": 738816,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "then",
       "start": 738838,
       "end": 739036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "hear",
       "start": 739078,
       "end": 739236,
       "confidence": 0.95211,
       "score": 3
     },
     {
       "speaker": "D",
       "text": "the",
       "start": 739258,
       "end": 739348,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "counselor's",
       "start": 739354,
       "end": 739936,
       "confidence": 0.95915,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "response.",
       "start": 739968,
       "end": 740900,
       "confidence": 0.99948,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "Keep",
       "start": 741560,
       "end": 741924,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "D",
       "text": "on",
       "start": 741962,
       "end": 742164,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "in",
       "start": 742202,
       "end": 742356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "this",
       "start": 742378,
       "end": 742516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "fashion",
       "start": 742538,
       "end": 742944,
       "confidence": 0.73713,
       "score": 1
     },
     {
       "speaker": "D",
       "text": "until",
       "start": 742992,
       "end": 743300,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "the",
       "start": 743370,
       "end": 743556,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "hour",
       "start": 743578,
       "end": 743764,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "D",
       "text": "is",
       "start": 743802,
       "end": 744004,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "over",
       "start": 744042,
       "end": 744532,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "or",
       "start": 744666,
       "end": 744916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "until",
       "start": 744938,
       "end": 745172,
       "confidence": 0.76057,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "you",
       "start": 745226,
       "end": 745396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "hear",
       "start": 745418,
       "end": 745604,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "D",
       "text": "instructions",
       "start": 745642,
       "end": 746192,
       "confidence": 0.98075,
       "score": 1
     },
     {
       "speaker": "D",
       "text": "on",
       "start": 746256,
       "end": 746436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "the",
       "start": 746458,
       "end": 746596,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "D",
       "text": "tape.",
       "start": 746618,
       "end": 747300,
       "confidence": 0.99671,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh.",
       "start": 751020,
       "end": 751740,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 751740,
       "end": 752072,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 752126,
       "end": 752730,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fantasies",
       "start": 753500,
       "end": 754212,
       "confidence": 0.67751,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 754276,
       "end": 754840,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "being",
       "start": 754990,
       "end": 755352,
       "confidence": 0.68931,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 755406,
       "end": 755528,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "billionaire,",
       "start": 755534,
       "end": 756084,
       "confidence": 0.95169,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "maybe.",
       "start": 756132,
       "end": 756488,
       "confidence": 0.99948,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 756574,
       "end": 757208,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "along",
       "start": 757374,
       "end": 757752,
       "confidence": 0.99945,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 757806,
       "end": 757976,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 757998,
       "end": 758136,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fantasy",
       "start": 758158,
       "end": 758548,
       "confidence": 0.56844,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 758564,
       "end": 758696,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 758718,
       "end": 758808,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "knowledge",
       "start": 758814,
       "end": 759076,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "I'll",
       "start": 759108,
       "end": 759268,
       "confidence": 0.99982,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 759284,
       "end": 759416,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "working",
       "start": 759438,
       "end": 759672,
       "confidence": 0.99997,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 759726,
       "end": 760040,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "somebody,",
       "start": 760110,
       "end": 760730,
       "confidence": 0.99965,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 761100,
       "end": 761464,
       "confidence": 0.99997,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 761502,
       "end": 761704,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it's,",
       "start": 761742,
       "end": 761980,
       "confidence": 0.99231,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 761980,
       "end": 762340,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 762340,
       "end": 762824,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "public",
       "start": 762942,
       "end": 763320,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 763390,
       "end": 763624,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something.",
       "start": 763662,
       "end": 764250,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 765000,
       "end": 765320,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 765980,
       "end": 766296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 766318,
       "end": 766516,
       "confidence": 0.9998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 766548,
       "end": 766696,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 766718,
       "end": 766856,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'll",
       "start": 766878,
       "end": 767076,
       "confidence": 0.92163,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ever",
       "start": 767108,
       "end": 767304,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 767342,
       "end": 767496,
       "confidence": 1.0,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 767518,
       "end": 767608,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 767614,
       "end": 767736,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "point",
       "start": 767758,
       "end": 767944,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 767982,
       "end": 768136,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "where",
       "start": 768158,
       "end": 768296,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 768318,
       "end": 768456,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 768478,
       "end": 768676,
       "confidence": 0.97425,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 768708,
       "end": 768856,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 768878,
       "end": 768968,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "whole",
       "start": 768974,
       "end": 769096,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "lot",
       "start": 769118,
       "end": 769256,
       "confidence": 0.98,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 769278,
       "end": 769416,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "superiors",
       "start": 769438,
       "end": 770084,
       "confidence": 0.78128,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "around.",
       "start": 770132,
       "end": 770730,
       "confidence": 0.99972,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "It.",
       "start": 789240,
       "end": 789990,
       "confidence": 0.44,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I've",
       "start": 792920,
       "end": 792940,
       "confidence": 0.9989,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "m",
       "start": 792940,
       "end": 793080,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "got",
       "start": 793328,
       "end": 793476,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "big",
       "start": 793498,
       "end": 793732,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "ideas,",
       "start": 793786,
       "end": 794256,
       "confidence": 0.97933,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "but",
       "start": 794288,
       "end": 794436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 794458,
       "end": 794596,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "expect",
       "start": 794618,
       "end": 794900,
       "confidence": 0.65486,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 794970,
       "end": 795156,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "be",
       "start": 795178,
       "end": 795364,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "under",
       "start": 795402,
       "end": 795700,
       "confidence": 0.82893,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "somebody.",
       "start": 795770,
       "end": 796390,
       "confidence": 0.99977,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Is",
       "start": 797640,
       "end": 797956,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 797978,
       "end": 798116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "what",
       "start": 798138,
       "end": 798276,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 798298,
       "end": 798448,
       "confidence": 0.956,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying?",
       "start": 798464,
       "end": 798596,
       "confidence": 0.98435,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah.",
       "start": 798618,
       "end": 799188,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "So",
       "start": 799354,
       "end": 800070,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "what",
       "start": 802060,
       "end": 802424,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "is",
       "start": 802462,
       "end": 802712,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "there",
       "start": 802766,
       "end": 803370,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "in",
       "start": 804540,
       "end": 804904,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "me",
       "start": 804942,
       "end": 805240,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 805310,
       "end": 805496,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "brings",
       "start": 805518,
       "end": 805796,
       "confidence": 0.59913,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "me",
       "start": 805828,
       "end": 805928,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "back?",
       "start": 805934,
       "end": 806056,
       "confidence": 0.8263,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah.",
       "start": 806078,
       "end": 806264,
       "confidence": 0.76,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "This",
       "start": 806302,
       "end": 806456,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "problem",
       "start": 806478,
       "end": 806712,
       "confidence": 0.99971,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "needs",
       "start": 806766,
       "end": 807032,
       "confidence": 0.76579,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 807086,
       "end": 807256,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "solution,",
       "start": 807278,
       "end": 807700,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 807780,
       "end": 808216,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "moving",
       "start": 808318,
       "end": 808632,
       "confidence": 0.99992,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "from",
       "start": 808686,
       "end": 808856,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 808878,
       "end": 809064,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "job",
       "start": 809102,
       "end": 809304,
       "confidence": 1.0,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 809342,
       "end": 809544,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 809582,
       "end": 809784,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "job",
       "start": 809822,
       "end": 810072,
       "confidence": 0.99999,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 810126,
       "end": 810344,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 810382,
       "end": 810584,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 810622,
       "end": 810872,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to,",
       "start": 810926,
       "end": 811280,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 811280,
       "end": 813100,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh.",
       "start": 813180,
       "end": 813860,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "If",
       "start": 813860,
       "end": 814152,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 814206,
       "end": 814424,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "superstition",
       "start": 814462,
       "end": 815092,
       "confidence": 0.96588,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 815156,
       "end": 815384,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "true,",
       "start": 815422,
       "end": 815720,
       "confidence": 0.99967,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 815790,
       "end": 816168,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 816254,
       "end": 816696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "always",
       "start": 816798,
       "end": 817160,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "end",
       "start": 817230,
       "end": 817416,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "up",
       "start": 817438,
       "end": 817624,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 817662,
       "end": 817912,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 817966,
       "end": 818280,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 818350,
       "end": 818632,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 818686,
       "end": 819290,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 820060,
       "end": 820472,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 820526,
       "end": 820696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 820718,
       "end": 820904,
       "confidence": 0.99982,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 820942,
       "end": 821096,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 821118,
       "end": 821208,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 821214,
       "end": 821336,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "four",
       "start": 821358,
       "end": 821496,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 821518,
       "end": 821608,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "five",
       "start": 821614,
       "end": 821832,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "reasons",
       "start": 821886,
       "end": 822276,
       "confidence": 0.99983,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 822308,
       "end": 822468,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "trying",
       "start": 822484,
       "end": 822664,
       "confidence": 0.99997,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 822702,
       "end": 822856,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "explain,",
       "start": 822878,
       "end": 823400,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 823550,
       "end": 823816,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 823838,
       "end": 823928,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 823934,
       "end": 824056,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 824078,
       "end": 824216,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something",
       "start": 824238,
       "end": 824424,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 824462,
       "end": 824808,
       "confidence": 0.83116,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "learning",
       "start": 824894,
       "end": 825192,
       "confidence": 0.99994,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 825246,
       "end": 825464,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "handle",
       "start": 825502,
       "end": 825876,
       "confidence": 0.99999,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 825908,
       "end": 826056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "It.",
       "start": 851740,
       "end": 852200,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Or",
       "start": 852270,
       "end": 852552,
       "confidence": 0.78,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they.",
       "start": 852606,
       "end": 853210,
       "confidence": 0.96348,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Because",
       "start": 853660,
       "end": 854072,
       "confidence": 0.56177,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 854126,
       "end": 854296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "almost",
       "start": 854318,
       "end": 854600,
       "confidence": 0.99982,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "feel",
       "start": 854670,
       "end": 854952,
       "confidence": 0.99999,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "it's",
       "start": 855006,
       "end": 855640,
       "confidence": 0.9977,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "some",
       "start": 856140,
       "end": 856552,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "unkind",
       "start": 856606,
       "end": 857124,
       "confidence": 0.9999,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "fate",
       "start": 857172,
       "end": 857556,
       "confidence": 0.45569,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 857588,
       "end": 857784,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "brings",
       "start": 857822,
       "end": 858068,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 858084,
       "end": 858264,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "together",
       "start": 858302,
       "end": 858648,
       "confidence": 0.99996,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "with",
       "start": 858734,
       "end": 859370,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 860460,
       "end": 861256,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 861438,
       "end": 861784,
       "confidence": 0.99999,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 861822,
       "end": 862024,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "person.",
       "start": 862062,
       "end": 862650,
       "confidence": 0.99976,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 865020,
       "end": 865336,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you've",
       "start": 865358,
       "end": 865588,
       "confidence": 0.61027,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "got",
       "start": 865604,
       "end": 865748,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 865774,
       "end": 865916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "find",
       "start": 865938,
       "end": 866172,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "some",
       "start": 866226,
       "end": 866444,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "way,",
       "start": 866482,
       "end": 866780,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "if",
       "start": 866850,
       "end": 867132,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 867186,
       "end": 867404,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "is",
       "start": 867442,
       "end": 867644,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "going",
       "start": 867682,
       "end": 867788,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 867794,
       "end": 867916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "happen",
       "start": 867938,
       "end": 868124,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 868162,
       "end": 868316,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 868338,
       "end": 868524,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "again",
       "start": 868562,
       "end": 868764,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "and",
       "start": 868802,
       "end": 869004,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "again,",
       "start": 869042,
       "end": 869628,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you've",
       "start": 869794,
       "end": 870168,
       "confidence": 0.81379,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "got",
       "start": 870184,
       "end": 870316,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 870338,
       "end": 870476,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "find",
       "start": 870498,
       "end": 870732,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "some",
       "start": 870786,
       "end": 871004,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "way",
       "start": 871042,
       "end": 871244,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 871282,
       "end": 871870,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "relating",
       "start": 872240,
       "end": 872824,
       "confidence": 0.6077,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 872872,
       "end": 873036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "these.",
       "start": 873058,
       "end": 873244,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "People",
       "start": 873282,
       "end": 873580,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 873650,
       "end": 874270,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 875040,
       "end": 875356,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "agreeable",
       "start": 875378,
       "end": 875864,
       "confidence": 0.99962,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "way.",
       "start": 875912,
       "end": 876510,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Now,",
       "start": 878660,
       "end": 879160,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 879160,
       "end": 883240,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "here's",
       "start": 883460,
       "end": 883916,
       "confidence": 0.99938,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 883948,
       "end": 884096,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing.",
       "start": 884118,
       "end": 884690,
       "confidence": 0.99971,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Let's",
       "start": 885140,
       "end": 885596,
       "confidence": 0.56815,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 885628,
       "end": 885824,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 885862,
       "end": 886016,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "person",
       "start": 886038,
       "end": 886368,
       "confidence": 0.99998,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 886454,
       "end": 886704,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 886742,
       "end": 886896,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "whole",
       "start": 886918,
       "end": 887104,
       "confidence": 0.75,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "lot",
       "start": 887142,
       "end": 887296,
       "confidence": 1.0,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 887318,
       "end": 887890,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "areas,",
       "start": 888500,
       "end": 889600,
       "confidence": 0.9987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 890440,
       "end": 890804,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "somehow",
       "start": 890842,
       "end": 891296,
       "confidence": 0.9998,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "so",
       "start": 891328,
       "end": 891524,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "am",
       "start": 891562,
       "end": 891764,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I.",
       "start": 891802,
       "end": 892390,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Ah,",
       "start": 894120,
       "end": 894320,
       "confidence": 0.51,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 894320,
       "end": 898220,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 898220,
       "end": 898484,
       "confidence": 0.99838,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "areas",
       "start": 898522,
       "end": 899024,
       "confidence": 0.99914,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "I'm,",
       "start": 899072,
       "end": 899780,
       "confidence": 0.47731,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 900200,
       "end": 900756,
       "confidence": 0.55,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 900858,
       "end": 901172,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "threatened",
       "start": 901226,
       "end": 901708,
       "confidence": 0.99976,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 901744,
       "end": 901944,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 901982,
       "end": 902184,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 902222,
       "end": 902808,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "things",
       "start": 902974,
       "end": 903448,
       "confidence": 0.99997,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 903534,
       "end": 903736,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "am",
       "start": 903758,
       "end": 903992,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "interested",
       "start": 904046,
       "end": 904504,
       "confidence": 0.99997,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 904622,
       "end": 905290,
       "confidence": 0.56,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 906220,
       "end": 906760,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 906760,
       "end": 908220,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 908220,
       "end": 908472,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "attitudes",
       "start": 908526,
       "end": 909124,
       "confidence": 0.99297,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 909172,
       "end": 909384,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 909422,
       "end": 909624,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 909662,
       "end": 909864,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 909902,
       "end": 910056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 910078,
       "end": 910216,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this.",
       "start": 910238,
       "end": 910760,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "So",
       "start": 910910,
       "end": 911224,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "when",
       "start": 911262,
       "end": 911464,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 911502,
       "end": 911656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 911678,
       "end": 911912,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 911966,
       "end": 912232,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "person,",
       "start": 912286,
       "end": 912600,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 912670,
       "end": 912808,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 912814,
       "end": 912996,
       "confidence": 0.99543,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "believe",
       "start": 913028,
       "end": 913224,
       "confidence": 0.99999,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 913262,
       "end": 913464,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 913502,
       "end": 913656,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "anywhere",
       "start": 913678,
       "end": 914048,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "near",
       "start": 914084,
       "end": 914332,
       "confidence": 0.99537,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 914386,
       "end": 914556,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 914578,
       "end": 914764,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 914802,
       "end": 915390,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 916720,
       "end": 917132,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 917186,
       "end": 917452,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 917506,
       "end": 917868,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "somehow",
       "start": 917954,
       "end": 918552,
       "confidence": 0.99774,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 918616,
       "end": 918988,
       "confidence": 0.53,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 919074,
       "end": 919324,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "whoever",
       "start": 919362,
       "end": 919752,
       "confidence": 0.99205,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 919816,
       "end": 919996,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "meet",
       "start": 920018,
       "end": 920684,
       "confidence": 0.9828,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 920882,
       "end": 921292,
       "confidence": 0.62,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 921346,
       "end": 921564,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 921602,
       "end": 921756,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 921778,
       "end": 921868,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "power",
       "start": 921874,
       "end": 922140,
       "confidence": 0.78,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "position",
       "start": 922210,
       "end": 922636,
       "confidence": 0.99912,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "over",
       "start": 922738,
       "end": 923052,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 923106,
       "end": 923710,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "enough",
       "start": 924560,
       "end": 925068,
       "confidence": 0.99971,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "common",
       "start": 925154,
       "end": 925548,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "attributes",
       "start": 925634,
       "end": 926232,
       "confidence": 0.99965,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 926296,
       "end": 926524,
       "confidence": 0.66,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 926562,
       "end": 926764,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "single",
       "start": 926802,
       "end": 927100,
       "confidence": 0.99865,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 927170,
       "end": 927356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 927378,
       "end": 927564,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "call",
       "start": 927602,
       "end": 927804,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 927842,
       "end": 927996,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type?",
       "start": 928018,
       "end": 928590,
       "confidence": 0.99968,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "In",
       "start": 929680,
       "end": 930044,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "many",
       "start": 930082,
       "end": 930284,
       "confidence": 0.99999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "ways,",
       "start": 930322,
       "end": 930632,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 930706,
       "end": 930944,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 930982,
       "end": 931184,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "sister",
       "start": 931222,
       "end": 931516,
       "confidence": 0.99973,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 931548,
       "end": 931696,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 931718,
       "end": 931904,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 931942,
       "end": 932096,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 932118,
       "end": 932352,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "man",
       "start": 932406,
       "end": 932624,
       "confidence": 0.99993,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 932662,
       "end": 932816,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "used",
       "start": 932838,
       "end": 933024,
       "confidence": 0.83329,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 933062,
       "end": 933216,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 933238,
       "end": 933424,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "for,",
       "start": 933462,
       "end": 934048,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 934214,
       "end": 934544,
       "confidence": 0.5,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 934582,
       "end": 934784,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fellow",
       "start": 934822,
       "end": 935116,
       "confidence": 0.78989,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 935148,
       "end": 935344,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 935382,
       "end": 935536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 935558,
       "end": 935744,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 935782,
       "end": 935936,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "man",
       "start": 935958,
       "end": 936144,
       "confidence": 0.99986,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 936182,
       "end": 936336,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "used",
       "start": 936358,
       "end": 936544,
       "confidence": 0.59277,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 936582,
       "end": 936736,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 936758,
       "end": 936944,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "for.",
       "start": 936982,
       "end": 937570,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Now,",
       "start": 937940,
       "end": 938304,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 938342,
       "end": 938496,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 938518,
       "end": 938656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something",
       "start": 938678,
       "end": 938972,
       "confidence": 0.86,
       "score": 27
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 939046,
       "end": 939284,
       "confidence": 0.99972,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 939322,
       "end": 939524,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 939562,
       "end": 939716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 939738,
       "end": 939876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 939898,
       "end": 940084,
       "confidence": 0.99944,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 940122,
       "end": 940324,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "certain",
       "start": 940362,
       "end": 940612,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "things",
       "start": 940666,
       "end": 940932,
       "confidence": 1.0,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 940986,
       "end": 941156,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 941178,
       "end": 941364,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 941402,
       "end": 941652,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 941706,
       "end": 941876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 941898,
       "end": 942144,
       "confidence": 0.99933,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 942192,
       "end": 942836,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 943018,
       "end": 943316,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 943338,
       "end": 943572,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "antagonize",
       "start": 943626,
       "end": 944432,
       "confidence": 0.93576,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 944496,
       "end": 945110,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 945800,
       "end": 946212,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that,",
       "start": 946266,
       "end": 946680,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 946680,
       "end": 948280,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cause",
       "start": 948280,
       "end": 948660,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 948730,
       "end": 948916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 948938,
       "end": 949172,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "act",
       "start": 949226,
       "end": 949830,
       "confidence": 0.99999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 950360,
       "end": 950772,
       "confidence": 0.64,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 950826,
       "end": 951200,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pattern",
       "start": 951290,
       "end": 951684,
       "confidence": 0.91831,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "toward",
       "start": 951732,
       "end": 952084,
       "confidence": 0.94649,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 952132,
       "end": 952728,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 952894,
       "end": 953224,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 953262,
       "end": 953464,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "aren't",
       "start": 953502,
       "end": 953796,
       "confidence": 0.63765,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 953828,
       "end": 953976,
       "confidence": 0.99,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 953998,
       "end": 954136,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like?",
       "start": 954158,
       "end": 954730,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 956700,
       "end": 957200,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 957200,
       "end": 957700,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 957700,
       "end": 958280,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 958430,
       "end": 958792,
       "confidence": 0.99944,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 958846,
       "end": 959112,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 959166,
       "end": 959384,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "act",
       "start": 959422,
       "end": 959672,
       "confidence": 0.58501,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "toward",
       "start": 959726,
       "end": 960132,
       "confidence": 0.85345,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 960196,
       "end": 960472,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 960526,
       "end": 960744,
       "confidence": 0.99999,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 960782,
       "end": 960888,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bit",
       "start": 960894,
       "end": 961064,
       "confidence": 0.99997,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "alike.",
       "start": 961102,
       "end": 961880,
       "confidence": 0.6346,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "M",
       "start": 967740,
       "end": 968950,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "it.",
       "start": 976260,
       "end": 977010,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Are",
       "start": 987060,
       "end": 987376,
       "confidence": 0.9956,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 987398,
       "end": 987536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying",
       "start": 987558,
       "end": 987792,
       "confidence": 0.99935,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "here",
       "start": 987846,
       "end": 988400,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 988550,
       "end": 988876,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "don't",
       "start": 988918,
       "end": 989136,
       "confidence": 0.99988,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "know",
       "start": 989168,
       "end": 989316,
       "confidence": 0.99999,
       "score": 42
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 989338,
       "end": 989476,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "whole",
       "start": 989498,
       "end": 989780,
       "confidence": 0.75,
       "score": 9
     },
     {
       "speaker": "B",
       "text": "person?",
       "start": 989850,
       "end": 990470,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "No.",
       "start": 990920,
       "end": 991670,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 993400,
       "end": 993812,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "is",
       "start": 993866,
       "end": 994036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "it",
       "start": 994058,
       "end": 994244,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 994282,
       "end": 994436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 994458,
       "end": 994784,
       "confidence": 0.63171,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "just",
       "start": 994832,
       "end": 995430,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "singling",
       "start": 995800,
       "end": 996400,
       "confidence": 0.51529,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "out",
       "start": 996480,
       "end": 997110,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "parts",
       "start": 998760,
       "end": 999216,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 999248,
       "end": 999396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "these",
       "start": 999418,
       "end": 999604,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "people",
       "start": 999642,
       "end": 1000230,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 1000840,
       "end": 1001590,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "are",
       "start": 1003100,
       "end": 1003512,
       "confidence": 0.93936,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "like",
       "start": 1003566,
       "end": 1004264,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "B",
       "text": "your",
       "start": 1004462,
       "end": 1004872,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "sister",
       "start": 1004926,
       "end": 1005204,
       "confidence": 0.99998,
       "score": 10
     },
     {
       "speaker": "B",
       "text": "in",
       "start": 1005252,
       "end": 1005416,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "law",
       "start": 1005438,
       "end": 1005720,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "was",
       "start": 1005790,
       "end": 1006072,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "in",
       "start": 1006126,
       "end": 1006296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 1006318,
       "end": 1006504,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "exaggerated",
       "start": 1006542,
       "end": 1007300,
       "confidence": 0.99756,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "way,",
       "start": 1007380,
       "end": 1007720,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "or",
       "start": 1007790,
       "end": 1008264,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "your",
       "start": 1008382,
       "end": 1008664,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "other",
       "start": 1008702,
       "end": 1008952,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "boss?",
       "start": 1009006,
       "end": 1009040,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Uh,",
       "start": 1009040,
       "end": 1009420,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "or",
       "start": 1009420,
       "end": 1009576,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 1009598,
       "end": 1009784,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "boss,",
       "start": 1009822,
       "end": 1010084,
       "confidence": 0.998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "do",
       "start": 1010132,
       "end": 1010296,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 1010318,
       "end": 1010504,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "just",
       "start": 1010542,
       "end": 1010792,
       "confidence": 0.99899,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "somehow",
       "start": 1010846,
       "end": 1011720,
       "confidence": 0.99998,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "appeal",
       "start": 1013180,
       "end": 1013856,
       "confidence": 0.98651,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 1013908,
       "end": 1014172,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "or",
       "start": 1014226,
       "end": 1014588,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "perceive",
       "start": 1014674,
       "end": 1015320,
       "confidence": 0.91535,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "or",
       "start": 1015400,
       "end": 1016030,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "stimulate",
       "start": 1016560,
       "end": 1017256,
       "confidence": 0.99914,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "or",
       "start": 1017288,
       "end": 1017484,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "react",
       "start": 1017522,
       "end": 1017864,
       "confidence": 0.99995,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "or",
       "start": 1017912,
       "end": 1018124,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "something",
       "start": 1018162,
       "end": 1018412,
       "confidence": 0.99,
       "score": 27
     },
     {
       "speaker": "B",
       "text": "like",
       "start": 1018466,
       "end": 1019164,
       "confidence": 0.75,
       "score": 56
     },
     {
       "speaker": "B",
       "text": "these",
       "start": 1019362,
       "end": 1019772,
       "confidence": 0.64297,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "parts",
       "start": 1019826,
       "end": 1020184,
       "confidence": 0.55,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 1020232,
       "end": 1020684,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "antagonize",
       "start": 1020802,
       "end": 1021672,
       "confidence": 0.998,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "so",
       "start": 1021736,
       "end": 1021964,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "much?",
       "start": 1022002,
       "end": 1022590,
       "confidence": 0.99228,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah,",
       "start": 1023040,
       "end": 1023790,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1025140,
       "end": 1027140,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1027140,
       "end": 1027276,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 1027298,
       "end": 1027436,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that's",
       "start": 1027458,
       "end": 1027736,
       "confidence": 0.93725,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1027768,
       "end": 1027868,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 1027874,
       "end": 1028092,
       "confidence": 0.99999,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "question",
       "start": 1028146,
       "end": 1028750,
       "confidence": 0.99861,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "because,",
       "start": 1030000,
       "end": 1030680,
       "confidence": 0.99722,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1030680,
       "end": 1036420,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 1036420,
       "end": 1036430,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "three",
       "start": 1036980,
       "end": 1037344,
       "confidence": 1.0,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1037382,
       "end": 1037632,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 1037686,
       "end": 1037904,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "treat",
       "start": 1037942,
       "end": 1038192,
       "confidence": 0.99998,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1038246,
       "end": 1038368,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lot",
       "start": 1038374,
       "end": 1038496,
       "confidence": 1.0,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1038518,
       "end": 1038704,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 1038742,
       "end": 1038944,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1038982,
       "end": 1039376,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "exactly",
       "start": 1039478,
       "end": 1039900,
       "confidence": 0.99989,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 1039990,
       "end": 1040244,
       "confidence": 0.99,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 1040282,
       "end": 1040532,
       "confidence": 0.89459,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "treat",
       "start": 1040586,
       "end": 1040900,
       "confidence": 0.99999,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 1040970,
       "end": 1041590,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 1042040,
       "end": 1042356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there's",
       "start": 1042378,
       "end": 1042656,
       "confidence": 0.48814,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1042688,
       "end": 1042788,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "further",
       "start": 1042794,
       "end": 1043152,
       "confidence": 0.38375,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing",
       "start": 1043216,
       "end": 1043540,
       "confidence": 0.99971,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "from",
       "start": 1043610,
       "end": 1043892,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1043946,
       "end": 1044164,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "viewpoint,",
       "start": 1044202,
       "end": 1045060,
       "confidence": 0.95642,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1046200,
       "end": 1046564,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 1046602,
       "end": 1046756,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1046778,
       "end": 1046916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ways",
       "start": 1046938,
       "end": 1047124,
       "confidence": 0.99992,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "that,",
       "start": 1047162,
       "end": 1047220,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1047220,
       "end": 1047700,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "supposing",
       "start": 1047700,
       "end": 1048096,
       "confidence": 0.98008,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1048128,
       "end": 1048324,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "boss",
       "start": 1048362,
       "end": 1048656,
       "confidence": 0.99997,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "were",
       "start": 1048688,
       "end": 1048980,
       "confidence": 0.83635,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "reacting",
       "start": 1049050,
       "end": 1049536,
       "confidence": 0.96205,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 1049568,
       "end": 1049716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 1049738,
       "end": 1049924,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "over",
       "start": 1049962,
       "end": 1050116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1050138,
       "end": 1050276,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "long",
       "start": 1050298,
       "end": 1050484,
       "confidence": 0.99995,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "period",
       "start": 1050522,
       "end": 1050864,
       "confidence": 0.84,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1050912,
       "end": 1051076,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 1051098,
       "end": 1051680,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 1051850,
       "end": 1052232,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "only",
       "start": 1052286,
       "end": 1052552,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1052606,
       "end": 1052776,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sort",
       "start": 1052798,
       "end": 1052984,
       "confidence": 0.99347,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1053022,
       "end": 1053176,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "things",
       "start": 1053198,
       "end": 1053480,
       "confidence": 0.9997,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "register",
       "start": 1053550,
       "end": 1054052,
       "confidence": 0.63,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 1054116,
       "end": 1054392,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1054446,
       "end": 1054712,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1054766,
       "end": 1055128,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1055214,
       "end": 1055560,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "hate",
       "start": 1055630,
       "end": 1055956,
       "confidence": 0.96119,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 1055988,
       "end": 1056232,
       "confidence": 0.9991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 1056286,
       "end": 1056792,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1056926,
       "end": 1057320,
       "confidence": 0.48,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 1057390,
       "end": 1057768,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "actions",
       "start": 1057854,
       "end": 1058244,
       "confidence": 0.99337,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "towards",
       "start": 1058292,
       "end": 1058600,
       "confidence": 0.9094,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "you.",
       "start": 1058670,
       "end": 1059000,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "So",
       "start": 1059070,
       "end": 1059304,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "again,",
       "start": 1059342,
       "end": 1059880,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "maybe",
       "start": 1060030,
       "end": 1060392,
       "confidence": 0.99799,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 1060446,
       "end": 1060664,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1060702,
       "end": 1060904,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1060942,
       "end": 1061096,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "funneled",
       "start": 1061118,
       "end": 1061508,
       "confidence": 0.92276,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "through",
       "start": 1061524,
       "end": 1061656,
       "confidence": 0.9861,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1061678,
       "end": 1061912,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "perceptions",
       "start": 1061966,
       "end": 1062532,
       "confidence": 0.93886,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "anyway,",
       "start": 1062596,
       "end": 1063210,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "which",
       "start": 1063820,
       "end": 1064184,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "may",
       "start": 1064222,
       "end": 1064376,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 1064398,
       "end": 1064584,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "distorted",
       "start": 1064622,
       "end": 1065252,
       "confidence": 0.99199,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 1065316,
       "end": 1065544,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "certainly",
       "start": 1065582,
       "end": 1065880,
       "confidence": 0.99997,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 1065950,
       "end": 1066136,
       "confidence": 0.97304,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "limited.",
       "start": 1066158,
       "end": 1066920,
       "confidence": 0.99925,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "It.",
       "start": 1076260,
       "end": 1077010,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Again,",
       "start": 1088500,
       "end": 1088972,
       "confidence": 0.99299,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "are",
       "start": 1089046,
       "end": 1089236,
       "confidence": 0.9794,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 1089258,
       "end": 1089396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "just",
       "start": 1089418,
       "end": 1089604,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "seeing",
       "start": 1089642,
       "end": 1089892,
       "confidence": 0.99902,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 1089946,
       "end": 1090260,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "one",
       "start": 1090330,
       "end": 1090950,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "B",
       "text": "side",
       "start": 1091800,
       "end": 1092212,
       "confidence": 0.99998,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 1092266,
       "end": 1092436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "these",
       "start": 1092458,
       "end": 1092644,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "people",
       "start": 1092682,
       "end": 1092980,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "B",
       "text": "and",
       "start": 1093050,
       "end": 1093284,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 1093322,
       "end": 1093524,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 1093562,
       "end": 1093716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "side",
       "start": 1093738,
       "end": 1093972,
       "confidence": 0.9999,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 1094026,
       "end": 1094196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 1094218,
       "end": 1094500,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "clash",
       "start": 1094570,
       "end": 1094992,
       "confidence": 0.99967,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "so",
       "start": 1095056,
       "end": 1095764,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "with?",
       "start": 1095962,
       "end": 1096660,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah.",
       "start": 1096810,
       "end": 1097510,
       "confidence": 0.55,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "You",
       "start": 1098360,
       "end": 1098724,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 1098762,
       "end": 1098916,
       "confidence": 0.99975,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of,",
       "start": 1098938,
       "end": 1099510,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 1100200,
       "end": 1100516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "think,",
       "start": 1100538,
       "end": 1100724,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "are",
       "start": 1100762,
       "end": 1100964,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying",
       "start": 1101002,
       "end": 1101590,
       "confidence": 0.99988,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 1103740,
       "end": 1104104,
       "confidence": 0.53,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "maybe",
       "start": 1104142,
       "end": 1104344,
       "confidence": 0.99919,
       "score": 12
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 1104382,
       "end": 1104584,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "is",
       "start": 1104622,
       "end": 1104824,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "what",
       "start": 1104862,
       "end": 1105016,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 1105038,
       "end": 1105236,
       "confidence": 0.99988,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "doing.",
       "start": 1105268,
       "end": 1105800,
       "confidence": 0.9998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah,",
       "start": 1105950,
       "end": 1106650,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 1107100,
       "end": 1107512,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 1107566,
       "end": 1107784,
       "confidence": 0.99998,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 1107822,
       "end": 1108024,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 1108062,
       "end": 1108650,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It",
       "start": 1112220,
       "end": 1112536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 1112558,
       "end": 1112744,
       "confidence": 0.69268,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 1112782,
       "end": 1113032,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1113086,
       "end": 1113690,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "these",
       "start": 1114240,
       "end": 1114652,
       "confidence": 0.99985,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1114706,
       "end": 1115068,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "also",
       "start": 1115154,
       "end": 1115790,
       "confidence": 0.99996,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 1116240,
       "end": 1116796,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1116898,
       "end": 1117164,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1117202,
       "end": 1117790,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1119520,
       "end": 1120364,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "likable",
       "start": 1120562,
       "end": 1121320,
       "confidence": 0.98334,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "side,",
       "start": 1121400,
       "end": 1121788,
       "confidence": 0.99967,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "each",
       "start": 1121874,
       "end": 1122124,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 1122162,
       "end": 1122316,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1122338,
       "end": 1122428,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1122434,
       "end": 1122556,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "three",
       "start": 1122578,
       "end": 1122764,
       "confidence": 1.0,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1122802,
       "end": 1122956,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 1122978,
       "end": 1123164,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people.",
       "start": 1123202,
       "end": 1123790,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1124560,
       "end": 1124924,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1124962,
       "end": 1125212,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "likable",
       "start": 1125266,
       "end": 1125800,
       "confidence": 0.50539,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "side",
       "start": 1125880,
       "end": 1126172,
       "confidence": 0.9992,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1126226,
       "end": 1126456,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "very",
       "start": 1126498,
       "end": 1126752,
       "confidence": 0.94554,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "similar.",
       "start": 1126806,
       "end": 1127410,
       "confidence": 0.99972,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Is",
       "start": 1130180,
       "end": 1130592,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1130646,
       "end": 1130864,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "how",
       "start": 1130902,
       "end": 1131104,
       "confidence": 0.99977,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1131142,
       "end": 1131296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 1131318,
       "end": 1131456,
       "confidence": 0.99982,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "tangled",
       "start": 1131478,
       "end": 1131836,
       "confidence": 0.99945,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "up",
       "start": 1131868,
       "end": 1132016,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 1132038,
       "end": 1132176,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 1132198,
       "end": 1132336,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1132358,
       "end": 1132448,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1132454,
       "end": 1132528,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "first",
       "start": 1132534,
       "end": 1132752,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "place?",
       "start": 1132806,
       "end": 1133410,
       "confidence": 0.99965,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "Mhm.",
       "start": 1136000,
       "end": 1137190,
       "confidence": 0.9909194707870483,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "You.",
       "start": 1151740,
       "end": 1152490,
       "confidence": 0.4,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "There",
       "start": 1156380,
       "end": 1156744,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "is",
       "start": 1156782,
       "end": 1157032,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "more",
       "start": 1157086,
       "end": 1157352,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 1157406,
       "end": 1157576,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "these",
       "start": 1157598,
       "end": 1157832,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "people",
       "start": 1157886,
       "end": 1158200,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "B",
       "text": "than.",
       "start": 1158270,
       "end": 1158552,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Just",
       "start": 1158606,
       "end": 1159256,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1159438,
       "end": 1159928,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "part",
       "start": 1160014,
       "end": 1160312,
       "confidence": 0.99647,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1160366,
       "end": 1160536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1160558,
       "end": 1160744,
       "confidence": 0.44,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1160782,
       "end": 1160996,
       "confidence": 0.93911,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like.",
       "start": 1161028,
       "end": 1161610,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "There's",
       "start": 1162060,
       "end": 1162516,
       "confidence": 0.53806,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "also",
       "start": 1162548,
       "end": 1163130,
       "confidence": 0.99949,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "any",
       "start": 1163740,
       "end": 1164164,
       "confidence": 0.59335,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "in",
       "start": 1164222,
       "end": 1164444,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "each",
       "start": 1164482,
       "end": 1164732,
       "confidence": 0.70239,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 1164786,
       "end": 1165100,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "these",
       "start": 1165170,
       "end": 1165452,
       "confidence": 0.9976,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "three",
       "start": 1165506,
       "end": 1165820,
       "confidence": 1.0,
       "score": 8
     },
     {
       "speaker": "B",
       "text": "there's",
       "start": 1165890,
       "end": 1166136,
       "confidence": 0.97304,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "something",
       "start": 1166168,
       "end": 1166700,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 1166850,
       "end": 1167212,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "attracts",
       "start": 1167266,
       "end": 1167736,
       "confidence": 0.99733,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 1167768,
       "end": 1168204,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that.",
       "start": 1168322,
       "end": 1168604,
       "confidence": 0.55,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1168642,
       "end": 1168844,
       "confidence": 0.83,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 1168882,
       "end": 1169324,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1169442,
       "end": 1169772,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1169826,
       "end": 1170044,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 1170082,
       "end": 1170284,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1170322,
       "end": 1170620,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "like.",
       "start": 1170690,
       "end": 1171310,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "These",
       "start": 1172640,
       "end": 1173052,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "three",
       "start": 1173106,
       "end": 1173324,
       "confidence": 1.0,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1173362,
       "end": 1173612,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 1173666,
       "end": 1173932,
       "confidence": 0.85191,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "liked",
       "start": 1173986,
       "end": 1174424,
       "confidence": 0.99367,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "by,",
       "start": 1174472,
       "end": 1174860,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1174860,
       "end": 1176960,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 1176960,
       "end": 1177340,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people.",
       "start": 1177410,
       "end": 1178030,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1179200,
       "end": 1179468,
       "confidence": 0.51,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1179474,
       "end": 1179596,
       "confidence": 0.90196,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 1179618,
       "end": 1179804,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 1179842,
       "end": 1180044,
       "confidence": 0.99939,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1180082,
       "end": 1180188,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1180194,
       "end": 1180268,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "three",
       "start": 1180274,
       "end": 1180444,
       "confidence": 1.0,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1180482,
       "end": 1180588,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 1180594,
       "end": 1180716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 1180738,
       "end": 1180840,
       "confidence": 0.69914,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "loved",
       "start": 1180850,
       "end": 1181116,
       "confidence": 0.99751,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 1181148,
       "end": 1181296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all,",
       "start": 1181318,
       "end": 1181890,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1182980,
       "end": 1183392,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 1183446,
       "end": 1183664,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 1183702,
       "end": 1184000,
       "confidence": 0.98698,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "liked,",
       "start": 1184070,
       "end": 1184700,
       "confidence": 0.82389,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1184700,
       "end": 1185560,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "by",
       "start": 1185560,
       "end": 1185872,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 1185926,
       "end": 1186144,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1186182,
       "end": 1186528,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "particularly.",
       "start": 1186614,
       "end": 1187340,
       "confidence": 0.98829,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 1187420,
       "end": 1187664,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 1187702,
       "end": 1187904,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "likable",
       "start": 1187942,
       "end": 1188412,
       "confidence": 0.65978,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1188476,
       "end": 1188752,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1188806,
       "end": 1189024,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1189062,
       "end": 1189264,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "who",
       "start": 1189302,
       "end": 1189456,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1189478,
       "end": 1189628,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 1189644,
       "end": 1189824,
       "confidence": 0.99999,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 1189862,
       "end": 1190016,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "very",
       "start": 1190038,
       "end": 1190272,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "well.",
       "start": 1190326,
       "end": 1190930,
       "confidence": 0.99988,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 1192100,
       "end": 1192640,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 1192640,
       "end": 1192896,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1192918,
       "end": 1193260,
       "confidence": 0.59,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1193350,
       "end": 1193604,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1193642,
       "end": 1193844,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 1193882,
       "end": 1194084,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "amusing",
       "start": 1194122,
       "end": 1194496,
       "confidence": 0.99934,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1194528,
       "end": 1194676,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "watch",
       "start": 1194698,
       "end": 1194884,
       "confidence": 0.99997,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "new",
       "start": 1194922,
       "end": 1195124,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "employees",
       "start": 1195162,
       "end": 1195744,
       "confidence": 0.99994,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "come",
       "start": 1195792,
       "end": 1195956,
       "confidence": 0.99976,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1195978,
       "end": 1196164,
       "confidence": 0.76,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "come",
       "start": 1196202,
       "end": 1196356,
       "confidence": 0.99973,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1196378,
       "end": 1196516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "come",
       "start": 1196538,
       "end": 1196724,
       "confidence": 0.99999,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1196762,
       "end": 1196916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1196938,
       "end": 1197076,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "place",
       "start": 1197098,
       "end": 1197332,
       "confidence": 0.99998,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1197386,
       "end": 1197508,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think,",
       "start": 1197514,
       "end": 1197684,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1197722,
       "end": 1197876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1197898,
       "end": 1198036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1198058,
       "end": 1198196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "greatest",
       "start": 1198218,
       "end": 1198496,
       "confidence": 0.99993,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "boss",
       "start": 1198528,
       "end": 1198864,
       "confidence": 0.76289,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 1198912,
       "end": 1199124,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "earth,",
       "start": 1199162,
       "end": 1199520,
       "confidence": 0.71851,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1199600,
       "end": 1199844,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "leave",
       "start": 1199882,
       "end": 1200132,
       "confidence": 0.99829,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "swearing",
       "start": 1200186,
       "end": 1200608,
       "confidence": 0.82903,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1200624,
       "end": 1200756,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "themselves.",
       "start": 1200778,
       "end": 1201350,
       "confidence": 0.99987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1202360,
       "end": 1202772,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 1202826,
       "end": 1202996,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1203018,
       "end": 1203204,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 1203242,
       "end": 1203396,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1203418,
       "end": 1203508,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "repeated",
       "start": 1203514,
       "end": 1203996,
       "confidence": 0.92078,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "pattern.",
       "start": 1204048,
       "end": 1204548,
       "confidence": 0.9995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 1204644,
       "end": 1204904,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1204942,
       "end": 1205096,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 1205118,
       "end": 1205256,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 1205278,
       "end": 1205512,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1205566,
       "end": 1205784,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 1205822,
       "end": 1205976,
       "confidence": 0.99999,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 1205998,
       "end": 1206136,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1206158,
       "end": 1206776,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "leave",
       "start": 1206958,
       "end": 1207352,
       "confidence": 0.84373,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "swearing",
       "start": 1207406,
       "end": 1207828,
       "confidence": 0.9322,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1207844,
       "end": 1207976,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "myself",
       "start": 1207998,
       "end": 1208376,
       "confidence": 0.99982,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1208478,
       "end": 1208696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1208718,
       "end": 1208904,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "watch",
       "start": 1208942,
       "end": 1209192,
       "confidence": 0.99995,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 1209246,
       "end": 1209512,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 1209566,
       "end": 1209784,
       "confidence": 0.98884,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1209822,
       "end": 1209976,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "leave",
       "start": 1209998,
       "end": 1210184,
       "confidence": 0.99105,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "swearing",
       "start": 1210222,
       "end": 1210628,
       "confidence": 0.95218,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1210644,
       "end": 1210776,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "themselves",
       "start": 1210798,
       "end": 1211416,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1211598,
       "end": 1211944,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 1211982,
       "end": 1212184,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "register",
       "start": 1212222,
       "end": 1212660,
       "confidence": 0.76,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1212740,
       "end": 1212936,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1212958,
       "end": 1213096,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "count",
       "start": 1213118,
       "end": 1213400,
       "confidence": 0.99999,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 1213470,
       "end": 1213800,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1213870,
       "end": 1214056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1214078,
       "end": 1214216,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1214238,
       "end": 1214448,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "count",
       "start": 1214484,
       "end": 1214732,
       "confidence": 0.99985,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1214786,
       "end": 1214956,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ones",
       "start": 1214978,
       "end": 1215164,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1215202,
       "end": 1215404,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just,",
       "start": 1215442,
       "end": 1215820,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1215820,
       "end": 1216500,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1216500,
       "end": 1216776,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "show",
       "start": 1216808,
       "end": 1217004,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "up",
       "start": 1217042,
       "end": 1217244,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1217282,
       "end": 1217436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 1217458,
       "end": 1217692,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "someday",
       "start": 1217746,
       "end": 1218184,
       "confidence": 0.9978,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1218232,
       "end": 1218396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "disappear",
       "start": 1218418,
       "end": 1218856,
       "confidence": 0.99991,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "off",
       "start": 1218888,
       "end": 1219084,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1219122,
       "end": 1219228,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "payroll",
       "start": 1219234,
       "end": 1219980,
       "confidence": 0.99989,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1220640,
       "end": 1221004,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1221042,
       "end": 1221436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "forget",
       "start": 1221538,
       "end": 1221944,
       "confidence": 0.99996,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 1221992,
       "end": 1222156,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "were",
       "start": 1222178,
       "end": 1222316,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ever",
       "start": 1222338,
       "end": 1222572,
       "confidence": 0.99,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "there.",
       "start": 1222626,
       "end": 1222892,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1222946,
       "end": 1223280,
       "confidence": 0.53,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1223280,
       "end": 1224280,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1224400,
       "end": 1224716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "admit",
       "start": 1224738,
       "end": 1225016,
       "confidence": 0.99883,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1225048,
       "end": 1225196,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1225218,
       "end": 1225404,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "statistics",
       "start": 1225442,
       "end": 1225944,
       "confidence": 0.99974,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "aren't",
       "start": 1225992,
       "end": 1226324,
       "confidence": 0.53439,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "scientific",
       "start": 1226392,
       "end": 1226844,
       "confidence": 0.99988,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 1226892,
       "end": 1227056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 1227078,
       "end": 1227312,
       "confidence": 0.59,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "here",
       "start": 1227366,
       "end": 1227970,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1228980,
       "end": 1229392,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that,",
       "start": 1229446,
       "end": 1229740,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1229740,
       "end": 1232780,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1232840,
       "end": 1233760,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 1233860,
       "end": 1234224,
       "confidence": 0.5115,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 1234262,
       "end": 1234464,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 1234502,
       "end": 1234656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "again.",
       "start": 1234678,
       "end": 1235250,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But,",
       "start": 1235940,
       "end": 1236380,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh.",
       "start": 1236380,
       "end": 1236700,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It",
       "start": 1236700,
       "end": 1236736,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1236758,
       "end": 1236992,
       "confidence": 0.62,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "important,",
       "start": 1237046,
       "end": 1237456,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1237558,
       "end": 1237776,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think,",
       "start": 1237798,
       "end": 1238370,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1238980,
       "end": 1239392,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1239446,
       "end": 1239808,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1239894,
       "end": 1240192,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "notice",
       "start": 1240246,
       "end": 1240604,
       "confidence": 0.99991,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1240652,
       "end": 1240864,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 1240902,
       "end": 1241056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1241078,
       "end": 1241216,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1241238,
       "end": 1241376,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "likable",
       "start": 1241398,
       "end": 1241772,
       "confidence": 0.9603,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "part",
       "start": 1241836,
       "end": 1242064,
       "confidence": 0.99999,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 1242102,
       "end": 1242352,
       "confidence": 0.98813,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "each",
       "start": 1242406,
       "end": 1242624,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1242662,
       "end": 1242768,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "these",
       "start": 1242774,
       "end": 1242992,
       "confidence": 0.98145,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "three",
       "start": 1243046,
       "end": 1243312,
       "confidence": 1.0,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "people.",
       "start": 1243366,
       "end": 1243970,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It's",
       "start": 1244280,
       "end": 1244688,
       "confidence": 0.97193,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 1244704,
       "end": 1244884,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "true",
       "start": 1244922,
       "end": 1245076,
       "confidence": 0.99996,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1245098,
       "end": 1245284,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "divide",
       "start": 1245322,
       "end": 1245664,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "each",
       "start": 1245712,
       "end": 1245876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 1245898,
       "end": 1246036,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1246058,
       "end": 1246148,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 1246154,
       "end": 1246324,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1246362,
       "end": 1246804,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 1246922,
       "end": 1247252,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1247306,
       "end": 1247476,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 1247498,
       "end": 1247684,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 1247722,
       "end": 1247924,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1247962,
       "end": 1248068,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 1248074,
       "end": 1248196,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1248218,
       "end": 1248356,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "likable,",
       "start": 1248378,
       "end": 1248752,
       "confidence": 0.98288,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 1248816,
       "end": 1248996,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1249018,
       "end": 1249156,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 1249178,
       "end": 1249316,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "isn't.",
       "start": 1249338,
       "end": 1249616,
       "confidence": 0.99982,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 1249648,
       "end": 1249796,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 1249818,
       "end": 1249956,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1249978,
       "end": 1250116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1250138,
       "end": 1250228,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "likable",
       "start": 1250234,
       "end": 1250592,
       "confidence": 0.86136,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "part",
       "start": 1250656,
       "end": 1250884,
       "confidence": 0.99989,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1250922,
       "end": 1251076,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "each",
       "start": 1251098,
       "end": 1251236,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1251258,
       "end": 1251408,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 1251434,
       "end": 1251816,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1251918,
       "end": 1252136,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1252158,
       "end": 1252296,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 1252318,
       "end": 1252504,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that's",
       "start": 1252542,
       "end": 1252836,
       "confidence": 0.98667,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "similar",
       "start": 1252868,
       "end": 1253208,
       "confidence": 0.99983,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1253294,
       "end": 1253496,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1253518,
       "end": 1253656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "three",
       "start": 1253678,
       "end": 1253960,
       "confidence": 0.99,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "tooth.",
       "start": 1254030,
       "end": 1261820,
       "confidence": 0.76402,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "Mhm.",
       "start": 1261820,
       "end": 1263370,
       "confidence": 0.9987086653709412,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Noting",
       "start": 1278272,
       "end": 1279112,
       "confidence": 0.89806,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "it.",
       "start": 1279296,
       "end": 1279692,
       "confidence": 0.38,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "But",
       "start": 1279746,
       "end": 1280348,
       "confidence": 0.57,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "there",
       "start": 1280514,
       "end": 1280796,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "is",
       "start": 1280818,
       "end": 1281004,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "something",
       "start": 1281042,
       "end": 1281484,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "B",
       "text": "appealing",
       "start": 1281602,
       "end": 1282184,
       "confidence": 0.99954,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "about",
       "start": 1282232,
       "end": 1282540,
       "confidence": 0.88877,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "these,",
       "start": 1282610,
       "end": 1282988,
       "confidence": 0.99949,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "there's",
       "start": 1283074,
       "end": 1283576,
       "confidence": 0.37486,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "likable",
       "start": 1283688,
       "end": 1284280,
       "confidence": 0.86819,
       "score": 10
     },
     {
       "speaker": "B",
       "text": "something.",
       "start": 1284360,
       "end": 1284990,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 1285440,
       "end": 1286190,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "again,",
       "start": 1287360,
       "end": 1287868,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 1287954,
       "end": 1288590,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "somehow",
       "start": 1289280,
       "end": 1289864,
       "confidence": 0.58901,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "fits",
       "start": 1289912,
       "end": 1290264,
       "confidence": 0.99966,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "all",
       "start": 1290312,
       "end": 1290572,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "three",
       "start": 1290626,
       "end": 1290844,
       "confidence": 1.0,
       "score": 8
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 1290882,
       "end": 1291036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "these",
       "start": 1291058,
       "end": 1291352,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "people.",
       "start": 1291426,
       "end": 1292050,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "They",
       "start": 1292420,
       "end": 1292736,
       "confidence": 0.80078,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "are",
       "start": 1292758,
       "end": 1292896,
       "confidence": 0.69015,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 1292918,
       "end": 1293104,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "cluster",
       "start": 1293142,
       "end": 1294000,
       "confidence": 0.98374,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "pattern.",
       "start": 1295060,
       "end": 1296000,
       "confidence": 0.99981,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "You",
       "start": 1299620,
       "end": 1300032,
       "confidence": 0.83,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "really",
       "start": 1300086,
       "end": 1300352,
       "confidence": 0.99983,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "seem",
       "start": 1300406,
       "end": 1300636,
       "confidence": 0.99301,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 1300668,
       "end": 1300960,
       "confidence": 0.53,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "be",
       "start": 1301030,
       "end": 1301264,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying",
       "start": 1301302,
       "end": 1301890,
       "confidence": 0.99994,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "there",
       "start": 1302820,
       "end": 1303280,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "seems",
       "start": 1303350,
       "end": 1303970,
       "confidence": 0.9222,
       "score": 7
     },
     {
       "speaker": "B",
       "text": "some",
       "start": 1306040,
       "end": 1306452,
       "confidence": 0.98015,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "relation",
       "start": 1306506,
       "end": 1307008,
       "confidence": 0.428,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "appears,",
       "start": 1307104,
       "end": 1307664,
       "confidence": 0.76598,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "some",
       "start": 1307712,
       "end": 1307972,
       "confidence": 0.86818,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "connection",
       "start": 1308026,
       "end": 1308464,
       "confidence": 0.99993,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "or",
       "start": 1308512,
       "end": 1308772,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "pattern",
       "start": 1308826,
       "end": 1309540,
       "confidence": 0.88055,
       "score": 6
     },
     {
       "speaker": "B",
       "text": "appears",
       "start": 1310120,
       "end": 1310864,
       "confidence": 0.99207,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 1310912,
       "end": 1311076,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you.",
       "start": 1311098,
       "end": 1311670,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah.",
       "start": 1314600,
       "end": 1315350,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um.",
       "start": 1315500,
       "end": 1316000,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Well,",
       "start": 1316000,
       "end": 1316244,
       "confidence": 0.99987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "let's",
       "start": 1316282,
       "end": 1316576,
       "confidence": 0.99912,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "start",
       "start": 1316608,
       "end": 1316852,
       "confidence": 0.99997,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "up",
       "start": 1316906,
       "end": 1317124,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1317162,
       "end": 1317316,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "line.",
       "start": 1317338,
       "end": 1317620,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "There's",
       "start": 1317690,
       "end": 1318016,
       "confidence": 0.99877,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1318048,
       "end": 1318256,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 1318298,
       "end": 1318504,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "sister.",
       "start": 1318542,
       "end": 1318932,
       "confidence": 0.5115,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "My",
       "start": 1318996,
       "end": 1319128,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mother",
       "start": 1319134,
       "end": 1319396,
       "confidence": 0.91,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "worked,",
       "start": 1319428,
       "end": 1319800,
       "confidence": 0.99975,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1319800,
       "end": 1320080,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 1320080,
       "end": 1320264,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "much",
       "start": 1320302,
       "end": 1320456,
       "confidence": 0.99998,
       "score": 15
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 1320478,
       "end": 1320616,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1320638,
       "end": 1320776,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1320798,
       "end": 1320936,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1320958,
       "end": 1321096,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kid.",
       "start": 1321118,
       "end": 1321690,
       "confidence": 0.99878,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "She",
       "start": 1322220,
       "end": 1322584,
       "confidence": 0.88926,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ran",
       "start": 1322622,
       "end": 1322884,
       "confidence": 0.81448,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1322932,
       "end": 1323048,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "house.",
       "start": 1323054,
       "end": 1323272,
       "confidence": 0.66777,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "She",
       "start": 1323326,
       "end": 1323496,
       "confidence": 0.73717,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1323518,
       "end": 1323704,
       "confidence": 0.84178,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1323742,
       "end": 1323896,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "real",
       "start": 1323918,
       "end": 1324200,
       "confidence": 0.71,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "boss.",
       "start": 1324270,
       "end": 1324788,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "She",
       "start": 1324884,
       "end": 1325096,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1325118,
       "end": 1325352,
       "confidence": 0.52337,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1325406,
       "end": 1325576,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mother",
       "start": 1325598,
       "end": 1325924,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1325972,
       "end": 1326570,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1327020,
       "end": 1327384,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sociological",
       "start": 1327422,
       "end": 1328292,
       "confidence": 0.63868,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "sense.",
       "start": 1328356,
       "end": 1328680,
       "confidence": 0.94583,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1328750,
       "end": 1328936,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 1328958,
       "end": 1329096,
       "confidence": 0.99986,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 1329118,
       "end": 1329304,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 1329342,
       "end": 1329496,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1329518,
       "end": 1329656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "off",
       "start": 1329678,
       "end": 1329864,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1329902,
       "end": 1330056,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "school.",
       "start": 1330078,
       "end": 1330264,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "She",
       "start": 1330302,
       "end": 1330504,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ironed",
       "start": 1330542,
       "end": 1330868,
       "confidence": 0.99592,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1330884,
       "end": 1331028,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "shirt,",
       "start": 1331054,
       "end": 1331384,
       "confidence": 0.75075,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 1331432,
       "end": 1331596,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "washed",
       "start": 1331618,
       "end": 1331928,
       "confidence": 0.99023,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1331944,
       "end": 1332124,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ears.",
       "start": 1332162,
       "end": 1332860,
       "confidence": 0.69401,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 1333280,
       "end": 1334000,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 1334000,
       "end": 1334204,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cooked",
       "start": 1334242,
       "end": 1334584,
       "confidence": 0.99918,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1334632,
       "end": 1334748,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lunch",
       "start": 1334754,
       "end": 1335080,
       "confidence": 0.52336,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "when",
       "start": 1335160,
       "end": 1335356,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1335378,
       "end": 1335516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "came",
       "start": 1335538,
       "end": 1335676,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "home",
       "start": 1335698,
       "end": 1335884,
       "confidence": 0.91,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1335922,
       "end": 1336076,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lunch.",
       "start": 1336098,
       "end": 1336424,
       "confidence": 0.99983,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1336472,
       "end": 1336972,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1337106,
       "end": 1337356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mother",
       "start": 1337378,
       "end": 1337576,
       "confidence": 0.93,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1337608,
       "end": 1337756,
       "confidence": 0.92524,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 1337778,
       "end": 1337916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1337938,
       "end": 1338076,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1338098,
       "end": 1338188,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 1338194,
       "end": 1338316,
       "confidence": 0.99997,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1338338,
       "end": 1338428,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 1338434,
       "end": 1338556,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "home",
       "start": 1338578,
       "end": 1338716,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 1338738,
       "end": 1338924,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "04:00.",
       "start": 1338962,
       "end": 1339900,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 1340680,
       "end": 1341080,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1341080,
       "end": 1341292,
       "confidence": 0.71,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 1341346,
       "end": 1341564,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "summer",
       "start": 1341602,
       "end": 1341944,
       "confidence": 0.99994,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "long",
       "start": 1341992,
       "end": 1342636,
       "confidence": 0.9994,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "when",
       "start": 1342818,
       "end": 1343116,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you're",
       "start": 1343138,
       "end": 1343288,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "home,",
       "start": 1343304,
       "end": 1343484,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 1343522,
       "end": 1343676,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1343698,
       "end": 1343848,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "go",
       "start": 1343864,
       "end": 1343996,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1344018,
       "end": 1344156,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "school.",
       "start": 1344178,
       "end": 1344472,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "She",
       "start": 1344546,
       "end": 1344736,
       "confidence": 0.99792,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1344758,
       "end": 1344944,
       "confidence": 0.99987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1344982,
       "end": 1345616,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mother.",
       "start": 1345798,
       "end": 1346524,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "My",
       "start": 1346652,
       "end": 1346896,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mother",
       "start": 1346918,
       "end": 1347116,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "went",
       "start": 1347148,
       "end": 1347296,
       "confidence": 0.9998,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1347318,
       "end": 1347408,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 1347414,
       "end": 1347632,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "07:00",
       "start": 1347686,
       "end": 1348188,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1348204,
       "end": 1348336,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1348358,
       "end": 1348448,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "morning.",
       "start": 1348454,
       "end": 1348720,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1348790,
       "end": 1349020,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1349020,
       "end": 1349840,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 1349840,
       "end": 1349984,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "came",
       "start": 1350022,
       "end": 1350176,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "home,",
       "start": 1350198,
       "end": 1350384,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 1350422,
       "end": 1350576,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "generally",
       "start": 1350598,
       "end": 1350924,
       "confidence": 0.89213,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "laid",
       "start": 1350972,
       "end": 1351196,
       "confidence": 0.98005,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "down",
       "start": 1351228,
       "end": 1351376,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1351398,
       "end": 1351536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1351558,
       "end": 1351648,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "nap",
       "start": 1351654,
       "end": 1351836,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1351868,
       "end": 1351968,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 1351974,
       "end": 1352144,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "had",
       "start": 1352182,
       "end": 1352384,
       "confidence": 0.99978,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "dinner.",
       "start": 1352422,
       "end": 1353120,
       "confidence": 0.75206,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1353540,
       "end": 1354040,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1354040,
       "end": 1355860,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1355880,
       "end": 1356520,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 1356520,
       "end": 1356736,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1356758,
       "end": 1356896,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 1356918,
       "end": 1357056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "hour",
       "start": 1357078,
       "end": 1357264,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 1357302,
       "end": 1357408,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "two",
       "start": 1357414,
       "end": 1357632,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "contact",
       "start": 1357686,
       "end": 1358012,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 1358086,
       "end": 1358324,
       "confidence": 0.56,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "her,",
       "start": 1358362,
       "end": 1358516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "maybe",
       "start": 1358538,
       "end": 1358724,
       "confidence": 0.99995,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1358762,
       "end": 1358868,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1358874,
       "end": 1359044,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "evening.",
       "start": 1359082,
       "end": 1359424,
       "confidence": 0.99952,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1359472,
       "end": 1360020,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 1360170,
       "end": 1360436,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1360458,
       "end": 1360596,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 1360618,
       "end": 1360756,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "older,",
       "start": 1360778,
       "end": 1361056,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "though,",
       "start": 1361088,
       "end": 1361284,
       "confidence": 0.99942,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1361322,
       "end": 1361476,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1361498,
       "end": 1361636,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 1361658,
       "end": 1361892,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "eating",
       "start": 1361946,
       "end": 1362304,
       "confidence": 0.995,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1362352,
       "end": 1362516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "so",
       "start": 1362538,
       "end": 1362676,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "forth.",
       "start": 1362698,
       "end": 1362896,
       "confidence": 0.99958,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "So",
       "start": 1362928,
       "end": 1363172,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "really",
       "start": 1363226,
       "end": 1363492,
       "confidence": 0.99765,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1363546,
       "end": 1363956,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 1364058,
       "end": 1364324,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "sister",
       "start": 1364362,
       "end": 1364704,
       "confidence": 0.99988,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1364752,
       "end": 1364916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1364938,
       "end": 1365124,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mother",
       "start": 1365162,
       "end": 1365424,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1365472,
       "end": 1365876,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sense",
       "start": 1365978,
       "end": 1366244,
       "confidence": 0.99559,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1366282,
       "end": 1366496,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "amount",
       "start": 1366538,
       "end": 1366792,
       "confidence": 0.99435,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1366846,
       "end": 1367016,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 1367038,
       "end": 1367272,
       "confidence": 0.99973,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "spent",
       "start": 1367326,
       "end": 1367636,
       "confidence": 0.99995,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 1367668,
       "end": 1368344,
       "confidence": 0.5,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quantity",
       "start": 1368542,
       "end": 1369124,
       "confidence": 0.58109,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1369172,
       "end": 1369336,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "orders",
       "start": 1369358,
       "end": 1369716,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1369748,
       "end": 1369896,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "took",
       "start": 1369918,
       "end": 1370152,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "from",
       "start": 1370206,
       "end": 1370424,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "her,",
       "start": 1370462,
       "end": 1370780,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1370780,
       "end": 1372740,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1372820,
       "end": 1373440,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "things",
       "start": 1373440,
       "end": 1373752,
       "confidence": 0.99995,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1373806,
       "end": 1373976,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 1373998,
       "end": 1374184,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "did",
       "start": 1374222,
       "end": 1374472,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1374526,
       "end": 1374696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1374718,
       "end": 1375144,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "most",
       "start": 1375262,
       "end": 1375496,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1375518,
       "end": 1375608,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1375614,
       "end": 1375736,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "things",
       "start": 1375758,
       "end": 1375944,
       "confidence": 0.99998,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "most",
       "start": 1375982,
       "end": 1376184,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mothers",
       "start": 1376222,
       "end": 1376596,
       "confidence": 0.97022,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 1376628,
       "end": 1376824,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1376862,
       "end": 1377064,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kids.",
       "start": 1377102,
       "end": 1377688,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 1377840,
       "end": 1377880,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 1377880,
       "end": 1378184,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "did.",
       "start": 1378222,
       "end": 1378810,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "She",
       "start": 1379420,
       "end": 1380084,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "packed",
       "start": 1380222,
       "end": 1380696,
       "confidence": 0.99896,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "lunches",
       "start": 1380728,
       "end": 1381096,
       "confidence": 0.99986,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 1381128,
       "end": 1381324,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "we",
       "start": 1381362,
       "end": 1381516,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "carried",
       "start": 1381538,
       "end": 1381864,
       "confidence": 0.99984,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "lunches.",
       "start": 1381912,
       "end": 1382392,
       "confidence": 0.99672,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 1382456,
       "end": 1382740,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1382740,
       "end": 1384280,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "blew",
       "start": 1385200,
       "end": 1385656,
       "confidence": 0.99971,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "our",
       "start": 1385688,
       "end": 1385836,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "noses",
       "start": 1385858,
       "end": 1386216,
       "confidence": 0.75164,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 1386248,
       "end": 1386396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 1386418,
       "end": 1386556,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "needed",
       "start": 1386578,
       "end": 1386812,
       "confidence": 0.99994,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "blowing.",
       "start": 1386866,
       "end": 1387256,
       "confidence": 0.97494,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1387288,
       "end": 1387436,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 1387458,
       "end": 1387596,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1387618,
       "end": 1387756,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1387778,
       "end": 1387916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sort",
       "start": 1387938,
       "end": 1388124,
       "confidence": 0.87574,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1388162,
       "end": 1388316,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing.",
       "start": 1388338,
       "end": 1388764,
       "confidence": 0.99394,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yet,",
       "start": 1388882,
       "end": 1389164,
       "confidence": 0.56923,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1389202,
       "end": 1389356,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 1389378,
       "end": 1389612,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 1389666,
       "end": 1389884,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1389922,
       "end": 1390172,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1390226,
       "end": 1390396,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "epitome",
       "start": 1390418,
       "end": 1390904,
       "confidence": 0.99993,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1390952,
       "end": 1391116,
       "confidence": 0.55,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1391138,
       "end": 1391324,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 1391362,
       "end": 1391612,
       "confidence": 0.99993,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 1391666,
       "end": 1391896,
       "confidence": 0.98322,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "talking",
       "start": 1391928,
       "end": 1392184,
       "confidence": 0.53893,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "about.",
       "start": 1392242,
       "end": 1392944,
       "confidence": 0.99185,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1393142,
       "end": 1393456,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 1393478,
       "end": 1393664,
       "confidence": 0.84383,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1393702,
       "end": 1393856,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 1393878,
       "end": 1394064,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "met",
       "start": 1394102,
       "end": 1394256,
       "confidence": 0.99971,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1394278,
       "end": 1394368,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lot",
       "start": 1394374,
       "end": 1394544,
       "confidence": 1.0,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1394582,
       "end": 1394688,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 1394694,
       "end": 1394864,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1394902,
       "end": 1395056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 1395078,
       "end": 1395216,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 1395238,
       "end": 1395376,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Besides,",
       "start": 1395398,
       "end": 1395804,
       "confidence": 0.9811,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they're",
       "start": 1395852,
       "end": 1396028,
       "confidence": 0.99891,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 1396044,
       "end": 1396176,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "only",
       "start": 1396198,
       "end": 1396384,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1396422,
       "end": 1396624,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1396662,
       "end": 1396816,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 1396838,
       "end": 1397024,
       "confidence": 0.89,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "for.",
       "start": 1397062,
       "end": 1397312,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1397366,
       "end": 1397536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 1397558,
       "end": 1397696,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 1397718,
       "end": 1398384,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "around",
       "start": 1398582,
       "end": 1399136,
       "confidence": 0.99982,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "various",
       "start": 1399238,
       "end": 1399692,
       "confidence": 0.97119,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 1399756,
       "end": 1399984,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "places.",
       "start": 1400022,
       "end": 1400800,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 1401700,
       "end": 1402160,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1402160,
       "end": 1403680,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1403680,
       "end": 1403948,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wish",
       "start": 1403974,
       "end": 1404128,
       "confidence": 0.87603,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "you'd",
       "start": 1404144,
       "end": 1404336,
       "confidence": 0.88115,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "read",
       "start": 1404368,
       "end": 1404516,
       "confidence": 0.99927,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1404538,
       "end": 1404676,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Kane",
       "start": 1404698,
       "end": 1404944,
       "confidence": 0.35587,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "mutiny.",
       "start": 1404992,
       "end": 1405456,
       "confidence": 0.87753,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Because",
       "start": 1405488,
       "end": 1405732,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Captain",
       "start": 1405786,
       "end": 1406176,
       "confidence": 0.99,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "Quig,",
       "start": 1406208,
       "end": 1406576,
       "confidence": 0.61118,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1406608,
       "end": 1406804,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 1406842,
       "end": 1407430,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 1408440,
       "end": 1409190,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1413140,
       "end": 1415800,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 1415800,
       "end": 1416288,
       "confidence": 0.99074,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1416394,
       "end": 1417096,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "both",
       "start": 1417278,
       "end": 1417720,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1417790,
       "end": 1418264,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "most",
       "start": 1418382,
       "end": 1418712,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "likable",
       "start": 1418766,
       "end": 1419300,
       "confidence": 0.87639,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1419380,
       "end": 1419624,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1419662,
       "end": 1419816,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "most",
       "start": 1419838,
       "end": 1420024,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "treacherous.",
       "start": 1420062,
       "end": 1421080,
       "confidence": 0.99624,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1421660,
       "end": 1421976,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1421998,
       "end": 1422136,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "nastiest",
       "start": 1422158,
       "end": 1422756,
       "confidence": 0.99515,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1422788,
       "end": 1422936,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1422958,
       "end": 1423096,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "whole",
       "start": 1423118,
       "end": 1423304,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "lot.",
       "start": 1423342,
       "end": 1423930,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1424780,
       "end": 1425144,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "yet",
       "start": 1425182,
       "end": 1425432,
       "confidence": 0.99855,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1425486,
       "end": 1425656,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 1425678,
       "end": 1425912,
       "confidence": 0.85,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "her",
       "start": 1425966,
       "end": 1426232,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1426286,
       "end": 1426936,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1427118,
       "end": 1427416,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lot",
       "start": 1427438,
       "end": 1427576,
       "confidence": 1.0,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1427598,
       "end": 1427784,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people.",
       "start": 1427822,
       "end": 1428216,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Say,",
       "start": 1428318,
       "end": 1428584,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1428622,
       "end": 1428824,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sounds",
       "start": 1428862,
       "end": 1429124,
       "confidence": 0.99626,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "awful",
       "start": 1429182,
       "end": 1429464,
       "confidence": 0.99296,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "freudian.",
       "start": 1429512,
       "end": 1430456,
       "confidence": 0.25348,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Give",
       "start": 1430648,
       "end": 1431004,
       "confidence": 0.92977,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1431042,
       "end": 1431196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1431218,
       "end": 1431308,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "closed",
       "start": 1431314,
       "end": 1431704,
       "confidence": 0.7322,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "pin.",
       "start": 1431752,
       "end": 1432380,
       "confidence": 0.1428,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 1432680,
       "end": 1434500,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1434500,
       "end": 1435150,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing",
       "start": 1442640,
       "end": 1443052,
       "confidence": 0.99916,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "here,",
       "start": 1443106,
       "end": 1443612,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "before",
       "start": 1443746,
       "end": 1444044,
       "confidence": 0.99968,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1444082,
       "end": 1444236,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "forget",
       "start": 1444258,
       "end": 1444456,
       "confidence": 0.99867,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1444488,
       "end": 1444636,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mention.",
       "start": 1444658,
       "end": 1444940,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Is,",
       "start": 1445010,
       "end": 1445460,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh.",
       "start": 1445460,
       "end": 1446520,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "At",
       "start": 1446520,
       "end": 1446716,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "least",
       "start": 1446738,
       "end": 1447212,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1447346,
       "end": 1447596,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "series",
       "start": 1447618,
       "end": 1447944,
       "confidence": 0.99975,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1447992,
       "end": 1448108,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bosses",
       "start": 1448114,
       "end": 1448536,
       "confidence": 0.99455,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "I've",
       "start": 1448568,
       "end": 1448856,
       "confidence": 0.74864,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got.",
       "start": 1448888,
       "end": 1449132,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 1449186,
       "end": 1449356,
       "confidence": 0.99978,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 1449378,
       "end": 1449516,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "less",
       "start": 1449538,
       "end": 1449724,
       "confidence": 0.99872,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "so",
       "start": 1449762,
       "end": 1450060,
       "confidence": 0.5,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 1450130,
       "end": 1450316,
       "confidence": 0.9996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1450338,
       "end": 1450476,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 1450498,
       "end": 1450636,
       "confidence": 0.99999,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "older.",
       "start": 1450658,
       "end": 1450984,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Maybe",
       "start": 1451032,
       "end": 1451244,
       "confidence": 0.98876,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 1451282,
       "end": 1451576,
       "confidence": 0.52617,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "getting",
       "start": 1451608,
       "end": 1451852,
       "confidence": 0.99996,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "better.",
       "start": 1451906,
       "end": 1452364,
       "confidence": 0.99959,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That's",
       "start": 1452482,
       "end": 1452856,
       "confidence": 0.99353,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 1452888,
       "end": 1453036,
       "confidence": 0.99956,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1453058,
       "end": 1453196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "besides",
       "start": 1453218,
       "end": 1453608,
       "confidence": 0.45986,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1453624,
       "end": 1453708,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "full",
       "start": 1453714,
       "end": 1453908,
       "confidence": 0.4,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 1453954,
       "end": 1454550,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Just",
       "start": 1474920,
       "end": 1475236,
       "confidence": 0.92541,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 1475258,
       "end": 1475396,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "point",
       "start": 1475418,
       "end": 1475652,
       "confidence": 0.99,
       "score": 7
     },
     {
       "speaker": "B",
       "text": "out",
       "start": 1475706,
       "end": 1475876,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "there",
       "start": 1475898,
       "end": 1476036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "seems",
       "start": 1476058,
       "end": 1476244,
       "confidence": 0.9195,
       "score": 7
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 1476282,
       "end": 1476436,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "be",
       "start": 1476458,
       "end": 1476692,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 1476746,
       "end": 1476868,
       "confidence": 0.52,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "diminishing",
       "start": 1476874,
       "end": 1477940,
       "confidence": 0.73023,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "intent",
       "start": 1478360,
       "end": 1478888,
       "confidence": 0.59157,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "city",
       "start": 1478944,
       "end": 1479500,
       "confidence": 0.28,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 1479650,
       "end": 1479964,
       "confidence": 0.49,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "these",
       "start": 1480002,
       "end": 1480156,
       "confidence": 0.98927,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "people.",
       "start": 1480178,
       "end": 1480750,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "All",
       "start": 1483360,
       "end": 1483676,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "right.",
       "start": 1483698,
       "end": 1484270,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 1486420,
       "end": 1489180,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1489180,
       "end": 1489324,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1489362,
       "end": 1489468,
       "confidence": 0.55,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1489474,
       "end": 1489596,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cheat.",
       "start": 1489618,
       "end": 1489816,
       "confidence": 0.29934,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "To",
       "start": 1489848,
       "end": 1489996,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 1490018,
       "end": 1490204,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "really",
       "start": 1490242,
       "end": 1490444,
       "confidence": 0.99992,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1490482,
       "end": 1490636,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1490658,
       "end": 1490796,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "word.",
       "start": 1490818,
       "end": 1491390,
       "confidence": 0.56,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 1492020,
       "end": 1492540,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1492540,
       "end": 1494140,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 1494140,
       "end": 1494432,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "let's",
       "start": 1494486,
       "end": 1494796,
       "confidence": 0.95406,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see.",
       "start": 1494828,
       "end": 1495410,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Well,",
       "start": 1496420,
       "end": 1496784,
       "confidence": 0.62441,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 1496822,
       "end": 1496976,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1496998,
       "end": 1497136,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1497158,
       "end": 1497248,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "small",
       "start": 1497254,
       "end": 1497472,
       "confidence": 0.97594,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "interlude.",
       "start": 1497526,
       "end": 1498028,
       "confidence": 0.99898,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1498044,
       "end": 1498176,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "worked",
       "start": 1498198,
       "end": 1498384,
       "confidence": 0.992,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1498422,
       "end": 1498576,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "her",
       "start": 1498598,
       "end": 1498784,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "husband.",
       "start": 1498822,
       "end": 1499292,
       "confidence": 0.74577,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Actually,",
       "start": 1499356,
       "end": 1499680,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 1499750,
       "end": 1499984,
       "confidence": 0.76,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can't",
       "start": 1500022,
       "end": 1500236,
       "confidence": 0.99334,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "count",
       "start": 1500268,
       "end": 1500512,
       "confidence": 0.95342,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 1500566,
       "end": 1501140,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 1501140,
       "end": 1501500,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 1501500,
       "end": 1501788,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 1501804,
       "end": 1501984,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 1502022,
       "end": 1502224,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 1502262,
       "end": 1502512,
       "confidence": 0.58902,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1502566,
       "end": 1502736,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 1502758,
       "end": 1503330,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He's",
       "start": 1503780,
       "end": 1504236,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "no",
       "start": 1504268,
       "end": 1504416,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "better",
       "start": 1504438,
       "end": 1504624,
       "confidence": 0.99999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 1504662,
       "end": 1504864,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 1504902,
       "end": 1505104,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1505142,
       "end": 1505248,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them,",
       "start": 1505254,
       "end": 1505376,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1505398,
       "end": 1505536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 1505558,
       "end": 1505756,
       "confidence": 0.99971,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 1505788,
       "end": 1505984,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 1506022,
       "end": 1506224,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 1506262,
       "end": 1506850,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 1507780,
       "end": 1508400,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1508400,
       "end": 1508516,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 1508538,
       "end": 1508724,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 1508762,
       "end": 1509008,
       "confidence": 0.99971,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 1509024,
       "end": 1509204,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1509242,
       "end": 1509396,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type.",
       "start": 1509418,
       "end": 1509990,
       "confidence": 0.96928,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Interestingly",
       "start": 1511000,
       "end": 1511744,
       "confidence": 0.99904,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "enough,",
       "start": 1511792,
       "end": 1512004,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1512042,
       "end": 1512148,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "never",
       "start": 1512154,
       "end": 1512324,
       "confidence": 0.9987,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "felt",
       "start": 1512362,
       "end": 1512576,
       "confidence": 0.99798,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "anything",
       "start": 1512608,
       "end": 1512852,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1512906,
       "end": 1513124,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "contempt",
       "start": 1513162,
       "end": 1513584,
       "confidence": 0.99475,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1513632,
       "end": 1513892,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 1513946,
       "end": 1514550,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Because",
       "start": 1515160,
       "end": 1515572,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "where",
       "start": 1515626,
       "end": 1515796,
       "confidence": 0.99957,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "did",
       "start": 1515818,
       "end": 1516004,
       "confidence": 0.98199,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1516042,
       "end": 1516148,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 1516154,
       "end": 1516276,
       "confidence": 0.99998,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 1516298,
       "end": 1516436,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1516458,
       "end": 1516644,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "attitudes",
       "start": 1516682,
       "end": 1517136,
       "confidence": 0.71203,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "toward",
       "start": 1517168,
       "end": 1517424,
       "confidence": 0.49552,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "him?",
       "start": 1517472,
       "end": 1517636,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "From",
       "start": 1517658,
       "end": 1517844,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "her.",
       "start": 1517882,
       "end": 1518036,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1518058,
       "end": 1518196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 1518218,
       "end": 1518356,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "hated",
       "start": 1518378,
       "end": 1518624,
       "confidence": 0.71523,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "her",
       "start": 1518672,
       "end": 1518896,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "guts.",
       "start": 1518938,
       "end": 1519284,
       "confidence": 0.96566,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1519332,
       "end": 1519544,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1519582,
       "end": 1519736,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him,",
       "start": 1519758,
       "end": 1520136,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1520238,
       "end": 1520456,
       "confidence": 0.96034,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1520478,
       "end": 1520616,
       "confidence": 0.94739,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1520638,
       "end": 1520776,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "worthless",
       "start": 1520798,
       "end": 1521204,
       "confidence": 0.99955,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "drunkard",
       "start": 1521252,
       "end": 1521684,
       "confidence": 0.57112,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1521732,
       "end": 1522088,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "poor",
       "start": 1522174,
       "end": 1522484,
       "confidence": 0.99968,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "businessman",
       "start": 1522532,
       "end": 1523188,
       "confidence": 0.54607,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1523284,
       "end": 1523930,
       "confidence": 0.62,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 1524700,
       "end": 1525016,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1525038,
       "end": 1525224,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that.",
       "start": 1525262,
       "end": 1525512,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1525566,
       "end": 1525832,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1525886,
       "end": 1526056,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1526078,
       "end": 1526216,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "firmly",
       "start": 1526238,
       "end": 1526644,
       "confidence": 0.99991,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "entrenched",
       "start": 1526692,
       "end": 1527156,
       "confidence": 0.99989,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 1527188,
       "end": 1527288,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1527294,
       "end": 1527416,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "side",
       "start": 1527438,
       "end": 1527576,
       "confidence": 0.99484,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1527598,
       "end": 1527688,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1527694,
       "end": 1527864,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "right.",
       "start": 1527902,
       "end": 1528152,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Being",
       "start": 1528206,
       "end": 1528424,
       "confidence": 0.9954,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1528462,
       "end": 1528616,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wrong",
       "start": 1528638,
       "end": 1528920,
       "confidence": 0.99997,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "woman,",
       "start": 1528990,
       "end": 1529508,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1529604,
       "end": 1529876,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 1529918,
       "end": 1530172,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "sister.",
       "start": 1530226,
       "end": 1530860,
       "confidence": 0.98671,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Even",
       "start": 1531440,
       "end": 1531756,
       "confidence": 0.99999,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "though",
       "start": 1531778,
       "end": 1531964,
       "confidence": 0.94079,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1532002,
       "end": 1532156,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "did",
       "start": 1532178,
       "end": 1532316,
       "confidence": 0.98656,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 1532338,
       "end": 1532524,
       "confidence": 0.86,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1532562,
       "end": 1532764,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 1532802,
       "end": 1532956,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1532978,
       "end": 1533116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 1533138,
       "end": 1533276,
       "confidence": 0.59,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1533298,
       "end": 1533436,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time,",
       "start": 1533458,
       "end": 1533692,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1533746,
       "end": 1533964,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1534002,
       "end": 1534204,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 1534242,
       "end": 1534636,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "importantly",
       "start": 1534738,
       "end": 1535304,
       "confidence": 0.9964,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "enough",
       "start": 1535352,
       "end": 1535564,
       "confidence": 0.99945,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1535602,
       "end": 1535756,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "power",
       "start": 1535778,
       "end": 1535964,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "figure",
       "start": 1536002,
       "end": 1536252,
       "confidence": 0.73412,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 1536306,
       "end": 1536476,
       "confidence": 0.67912,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "far",
       "start": 1536498,
       "end": 1536636,
       "confidence": 0.99702,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 1536658,
       "end": 1536796,
       "confidence": 0.99941,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1536818,
       "end": 1536956,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1536978,
       "end": 1537164,
       "confidence": 0.94165,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "concerned.",
       "start": 1537202,
       "end": 1538060,
       "confidence": 0.80545,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 1538880,
       "end": 1540100,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "indirectly,",
       "start": 1540100,
       "end": 1540904,
       "confidence": 0.98865,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1540952,
       "end": 1541116,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 1541138,
       "end": 1541324,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1541362,
       "end": 1541708,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1541794,
       "end": 1542140,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "almost",
       "start": 1542210,
       "end": 1542588,
       "confidence": 0.99993,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 1542674,
       "end": 1542876,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "much",
       "start": 1542898,
       "end": 1543084,
       "confidence": 0.99972,
       "score": 15
     },
     {
       "speaker": "A",
       "text": "boss",
       "start": 1543122,
       "end": 1543464,
       "confidence": 0.66734,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1543512,
       "end": 1543628,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 1543634,
       "end": 1543804,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "business",
       "start": 1543842,
       "end": 1544140,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 1544210,
       "end": 1544396,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1544418,
       "end": 1544568,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was.",
       "start": 1544594,
       "end": 1544880,
       "confidence": 0.63704,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Because",
       "start": 1544950,
       "end": 1545232,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 1545286,
       "end": 1545456,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1545478,
       "end": 1545760,
       "confidence": 0.58902,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 1545830,
       "end": 1546112,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "too",
       "start": 1546166,
       "end": 1546384,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "smart,",
       "start": 1546422,
       "end": 1546716,
       "confidence": 0.999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'd",
       "start": 1546748,
       "end": 1546988,
       "confidence": 0.80635,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 1547004,
       "end": 1547136,
       "confidence": 0.99987,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "back",
       "start": 1547158,
       "end": 1547344,
       "confidence": 0.99998,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 1547382,
       "end": 1547536,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 1547558,
       "end": 1547648,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "through",
       "start": 1547654,
       "end": 1547824,
       "confidence": 0.65838,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1547862,
       "end": 1548064,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 1548102,
       "end": 1548352,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "sister.",
       "start": 1548406,
       "end": 1549040,
       "confidence": 0.72722,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1550020,
       "end": 1550336,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1550358,
       "end": 1550508,
       "confidence": 0.99978,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 1550524,
       "end": 1550704,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1550742,
       "end": 1550896,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 1550918,
       "end": 1551056,
       "confidence": 0.99998,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 1551078,
       "end": 1551216,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fired",
       "start": 1551238,
       "end": 1551548,
       "confidence": 0.99949,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 1551564,
       "end": 1551696,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1551718,
       "end": 1551856,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "put",
       "start": 1551878,
       "end": 1552016,
       "confidence": 0.96,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 1552038,
       "end": 1552176,
       "confidence": 0.52,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1552198,
       "end": 1552432,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way.",
       "start": 1552486,
       "end": 1553090,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 1553780,
       "end": 1554300,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1554300,
       "end": 1554540,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1554540,
       "end": 1554668,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1554694,
       "end": 1554896,
       "confidence": 0.99956,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "believe",
       "start": 1554928,
       "end": 1555172,
       "confidence": 0.99975,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1555226,
       "end": 1555396,
       "confidence": 0.99653,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could.",
       "start": 1555418,
       "end": 1555990,
       "confidence": 0.99977,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1556520,
       "end": 1556836,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "never",
       "start": 1556858,
       "end": 1557092,
       "confidence": 0.90702,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "thought",
       "start": 1557146,
       "end": 1557316,
       "confidence": 0.99997,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1557338,
       "end": 1557476,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1557498,
       "end": 1557636,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "till",
       "start": 1557658,
       "end": 1557888,
       "confidence": 0.82306,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 1557904,
       "end": 1558132,
       "confidence": 0.82047,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "now.",
       "start": 1558186,
       "end": 1558596,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 1558698,
       "end": 1558916,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "maybe",
       "start": 1558938,
       "end": 1559172,
       "confidence": 0.97804,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "that's",
       "start": 1559226,
       "end": 1559584,
       "confidence": 0.97285,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "why,",
       "start": 1559632,
       "end": 1559940,
       "confidence": 0.99949,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1560010,
       "end": 1560196,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 1560218,
       "end": 1560404,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1560442,
       "end": 1560644,
       "confidence": 0.99971,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doesn't",
       "start": 1560682,
       "end": 1560944,
       "confidence": 0.61788,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fit",
       "start": 1560992,
       "end": 1561204,
       "confidence": 0.99994,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "these",
       "start": 1561242,
       "end": 1561492,
       "confidence": 0.99953,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tights.",
       "start": 1561546,
       "end": 1562420,
       "confidence": 0.67877,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Or",
       "start": 1563000,
       "end": 1563364,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1563402,
       "end": 1563652,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tight",
       "start": 1563706,
       "end": 1564032,
       "confidence": 0.6494,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 1564096,
       "end": 1564416,
       "confidence": 0.77365,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "talking",
       "start": 1564448,
       "end": 1564692,
       "confidence": 0.99961,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "about.",
       "start": 1564746,
       "end": 1565350,
       "confidence": 0.96858,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "It.",
       "start": 1581700,
       "end": 1582450,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Really",
       "start": 1593990,
       "end": 1594402,
       "confidence": 0.98318,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "didn't",
       "start": 1594456,
       "end": 1595102,
       "confidence": 0.9883,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 1595246,
       "end": 1595602,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "control",
       "start": 1595656,
       "end": 1596210,
       "confidence": 0.62609,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "over",
       "start": 1596360,
       "end": 1596674,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you.",
       "start": 1596712,
       "end": 1597202,
       "confidence": 0.51,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Well,",
       "start": 1597336,
       "end": 1597586,
       "confidence": 0.97156,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 1597608,
       "end": 1597698,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "least",
       "start": 1597704,
       "end": 1597874,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1597912,
       "end": 1598114,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thought",
       "start": 1598152,
       "end": 1598306,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1598328,
       "end": 1598466,
       "confidence": 0.99451,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "didn't,",
       "start": 1598488,
       "end": 1598734,
       "confidence": 0.96102,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "which",
       "start": 1598782,
       "end": 1598946,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is,",
       "start": 1598968,
       "end": 1599166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "psychologically,",
       "start": 1599208,
       "end": 1599954,
       "confidence": 0.78657,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1600002,
       "end": 1600166,
       "confidence": 0.93961,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doesn't",
       "start": 1600188,
       "end": 1600386,
       "confidence": 0.99943,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 1600418,
       "end": 1600614,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then,",
       "start": 1600652,
       "end": 1600854,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "does",
       "start": 1600892,
       "end": 1601094,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he?",
       "start": 1601132,
       "end": 1601430,
       "confidence": 0.99549,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1601500,
       "end": 1601734,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 1601772,
       "end": 1602070,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1602140,
       "end": 1602326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1602348,
       "end": 1602534,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1602572,
       "end": 1602726,
       "confidence": 0.99349,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doesn't,",
       "start": 1602748,
       "end": 1602994,
       "confidence": 0.80894,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 1603042,
       "end": 1603206,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1603228,
       "end": 1603366,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1603388,
       "end": 1603526,
       "confidence": 0.83915,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 1603548,
       "end": 1603734,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "so.",
       "start": 1603772,
       "end": 1604118,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "The",
       "start": 1604204,
       "end": 1604406,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "only",
       "start": 1604428,
       "end": 1604614,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1604652,
       "end": 1604902,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "control",
       "start": 1604956,
       "end": 1605222,
       "confidence": 0.9999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1605276,
       "end": 1605446,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 1605468,
       "end": 1605606,
       "confidence": 0.8338,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 1605628,
       "end": 1605814,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1605852,
       "end": 1606006,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 1606028,
       "end": 1606214,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "do.",
       "start": 1606252,
       "end": 1606840,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1607530,
       "end": 1608280,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm,",
       "start": 1608890,
       "end": 1609040,
       "confidence": 0.97966,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1609040,
       "end": 1609080,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "only",
       "start": 1609314,
       "end": 1609514,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "afraid",
       "start": 1609552,
       "end": 1609798,
       "confidence": 0.99974,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1609814,
       "end": 1609946,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1609968,
       "end": 1610154,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1610192,
       "end": 1610298,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 1610304,
       "end": 1610426,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 1610448,
       "end": 1610646,
       "confidence": 0.78495,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "afraid",
       "start": 1610678,
       "end": 1611014,
       "confidence": 0.91933,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "of.",
       "start": 1611062,
       "end": 1611660,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "So",
       "start": 1631010,
       "end": 1631374,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 1631412,
       "end": 1631614,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "really",
       "start": 1631652,
       "end": 1631806,
       "confidence": 0.99984,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "didn't",
       "start": 1631828,
       "end": 1632058,
       "confidence": 0.9984,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 1632074,
       "end": 1632206,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 1632228,
       "end": 1632462,
       "confidence": 0.76,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "attitude",
       "start": 1632516,
       "end": 1633034,
       "confidence": 0.48944,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "toward",
       "start": 1633082,
       "end": 1633434,
       "confidence": 0.99951,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "him?",
       "start": 1633482,
       "end": 1633838,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "No.",
       "start": 1633924,
       "end": 1634510,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Actually",
       "start": 1634660,
       "end": 1634974,
       "confidence": 0.99992,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1635012,
       "end": 1635166,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 1635188,
       "end": 1635374,
       "confidence": 0.9986,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 1635412,
       "end": 1635566,
       "confidence": 0.99058,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1635588,
       "end": 1635726,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sorry",
       "start": 1635748,
       "end": 1636030,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1636100,
       "end": 1636298,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 1636324,
       "end": 1636900,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "nowadays.",
       "start": 1637430,
       "end": 1638302,
       "confidence": 0.83055,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "At",
       "start": 1638366,
       "end": 1638546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1638568,
       "end": 1638706,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 1638728,
       "end": 1638914,
       "confidence": 0.99999,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1638952,
       "end": 1639106,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 1639128,
       "end": 1639314,
       "confidence": 0.99957,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "felt",
       "start": 1639352,
       "end": 1639566,
       "confidence": 0.99998,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 1639598,
       "end": 1639698,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 1639704,
       "end": 1639826,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "less",
       "start": 1639848,
       "end": 1640034,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "contemptuous.",
       "start": 1640072,
       "end": 1640734,
       "confidence": 0.96403,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He",
       "start": 1640782,
       "end": 1640946,
       "confidence": 0.99957,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1640968,
       "end": 1641298,
       "confidence": 0.9824,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pointed",
       "start": 1641384,
       "end": 1641806,
       "confidence": 0.99133,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 1641838,
       "end": 1641938,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1641944,
       "end": 1642066,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1642088,
       "end": 1642754,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "exactly",
       "start": 1642952,
       "end": 1643410,
       "confidence": 0.99997,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 1643480,
       "end": 1643714,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 1643752,
       "end": 1643954,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1643992,
       "end": 1644098,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ever",
       "start": 1644104,
       "end": 1644274,
       "confidence": 0.78,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1644312,
       "end": 1644466,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do,",
       "start": 1644488,
       "end": 1644914,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "no",
       "start": 1645032,
       "end": 1645266,
       "confidence": 0.7,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "matter",
       "start": 1645288,
       "end": 1645522,
       "confidence": 0.8128,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 1645576,
       "end": 1645746,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 1645768,
       "end": 1645906,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was.",
       "start": 1645928,
       "end": 1646380,
       "confidence": 0.99314,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 1646380,
       "end": 1647120,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1647120,
       "end": 1647510,
       "confidence": 0.53867,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 1647580,
       "end": 1647814,
       "confidence": 0.96764,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "put",
       "start": 1647852,
       "end": 1648006,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 1648028,
       "end": 1648118,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "shoes",
       "start": 1648124,
       "end": 1648386,
       "confidence": 0.99937,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 1648418,
       "end": 1648614,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wrong,",
       "start": 1648652,
       "end": 1649334,
       "confidence": 0.9951,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tied",
       "start": 1649532,
       "end": 1649986,
       "confidence": 0.99429,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 1650018,
       "end": 1650166,
       "confidence": 0.71,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wrong",
       "start": 1650188,
       "end": 1650422,
       "confidence": 0.74988,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1650476,
       "end": 1650646,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "everything.",
       "start": 1650668,
       "end": 1651240,
       "confidence": 0.99899,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 1652520,
       "end": 1654900,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1654900,
       "end": 1655046,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 1655068,
       "end": 1655254,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "we",
       "start": 1655292,
       "end": 1655446,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "go",
       "start": 1655468,
       "end": 1655606,
       "confidence": 0.99,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "from",
       "start": 1655628,
       "end": 1655766,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there.",
       "start": 1655788,
       "end": 1655926,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "As",
       "start": 1655948,
       "end": 1656086,
       "confidence": 0.54689,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1656108,
       "end": 1656198,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fellow,",
       "start": 1656204,
       "end": 1656514,
       "confidence": 0.85466,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1656562,
       "end": 1657014,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ran",
       "start": 1657132,
       "end": 1657426,
       "confidence": 0.73711,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1657458,
       "end": 1657606,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "service",
       "start": 1657628,
       "end": 1657910,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "stations",
       "start": 1657980,
       "end": 1658450,
       "confidence": 0.99751,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "for,",
       "start": 1658530,
       "end": 1659160,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1660240,
       "end": 1660580,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1661230,
       "end": 1661738,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 1661824,
       "end": 1662122,
       "confidence": 0.99977,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1662176,
       "end": 1662490,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "period",
       "start": 1662560,
       "end": 1662934,
       "confidence": 0.94,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1662982,
       "end": 1663194,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "years.",
       "start": 1663232,
       "end": 1663820,
       "confidence": 0.97076,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1665470,
       "end": 1666220,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1668830,
       "end": 1669290,
       "confidence": 0.99976,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1669360,
       "end": 1669690,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 1669760,
       "end": 1670042,
       "confidence": 0.99938,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 1670096,
       "end": 1670362,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1670416,
       "end": 1670586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 1670608,
       "end": 1670890,
       "confidence": 0.89,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "sister.",
       "start": 1670960,
       "end": 1671650,
       "confidence": 0.99362,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He",
       "start": 1671830,
       "end": 1672126,
       "confidence": 0.9783,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "still",
       "start": 1672148,
       "end": 1672382,
       "confidence": 0.99962,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1672436,
       "end": 1672654,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "today.",
       "start": 1672692,
       "end": 1672990,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1673060,
       "end": 1673246,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 1673268,
       "end": 1673406,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 1673428,
       "end": 1673566,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "every",
       "start": 1673588,
       "end": 1673774,
       "confidence": 0.99969,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 1673812,
       "end": 1673966,
       "confidence": 0.99951,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1673988,
       "end": 1674078,
       "confidence": 0.9806,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "comes.",
       "start": 1674084,
       "end": 1674254,
       "confidence": 0.94378,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Chicago,",
       "start": 1674292,
       "end": 1675230,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1676080,
       "end": 1677760,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doesn't,",
       "start": 1677760,
       "end": 1677780,
       "confidence": 0.55597,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ah,",
       "start": 1677780,
       "end": 1677820,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "scare",
       "start": 1678154,
       "end": 1678426,
       "confidence": 0.99988,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1678458,
       "end": 1678654,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anymore",
       "start": 1678692,
       "end": 1679034,
       "confidence": 0.94567,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "though.",
       "start": 1679082,
       "end": 1679680,
       "confidence": 0.97803,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1680130,
       "end": 1680620,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1680620,
       "end": 1682380,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1682940,
       "end": 1683970,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 1686130,
       "end": 1686446,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there's",
       "start": 1686468,
       "end": 1686746,
       "confidence": 0.99693,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1686778,
       "end": 1686926,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fellow",
       "start": 1686948,
       "end": 1687194,
       "confidence": 0.7641,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1687242,
       "end": 1687406,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 1687428,
       "end": 1687614,
       "confidence": 0.66,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "for.",
       "start": 1687652,
       "end": 1688106,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "But",
       "start": 1688228,
       "end": 1688466,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "he",
       "start": 1688488,
       "end": 1688674,
       "confidence": 0.99947,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "lost",
       "start": 1688712,
       "end": 1688974,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "his",
       "start": 1689022,
       "end": 1689474,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "effect",
       "start": 1689592,
       "end": 1690018,
       "confidence": 0.99616,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "on",
       "start": 1690104,
       "end": 1690354,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you.",
       "start": 1690392,
       "end": 1690978,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah,",
       "start": 1691144,
       "end": 1691426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1691448,
       "end": 1691538,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 1691544,
       "end": 1691666,
       "confidence": 0.91368,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1691688,
       "end": 1691826,
       "confidence": 0.99916,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "treats",
       "start": 1691848,
       "end": 1692174,
       "confidence": 0.67418,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 1692222,
       "end": 1692386,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1692408,
       "end": 1692642,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1692696,
       "end": 1692914,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way,",
       "start": 1692952,
       "end": 1693154,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1693192,
       "end": 1693780,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 1695030,
       "end": 1695406,
       "confidence": 0.80308,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 1695438,
       "end": 1695634,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1695672,
       "end": 1695778,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "visitor.",
       "start": 1695784,
       "end": 1696174,
       "confidence": 0.99981,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1696222,
       "end": 1696386,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "either",
       "start": 1696408,
       "end": 1696594,
       "confidence": 0.99996,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "visit",
       "start": 1696632,
       "end": 1696926,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 1696958,
       "end": 1697154,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 1697192,
       "end": 1697346,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1697368,
       "end": 1697506,
       "confidence": 0.99962,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "visits",
       "start": 1697528,
       "end": 1697806,
       "confidence": 0.99976,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 1697838,
       "end": 1698034,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He",
       "start": 1698072,
       "end": 1698178,
       "confidence": 0.99963,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doesn't",
       "start": 1698184,
       "end": 1698446,
       "confidence": 0.9975,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sign",
       "start": 1698478,
       "end": 1698674,
       "confidence": 0.9988,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1698712,
       "end": 1698914,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "paychecks.",
       "start": 1698952,
       "end": 1699614,
       "confidence": 0.66415,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 1699662,
       "end": 1699940,
       "confidence": 0.57,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 1699940,
       "end": 1700100,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "It.",
       "start": 1709150,
       "end": 1709900,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "When",
       "start": 1727330,
       "end": 1727646,
       "confidence": 0.87574,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "he",
       "start": 1727668,
       "end": 1727806,
       "confidence": 0.99924,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "becomes",
       "start": 1727828,
       "end": 1728378,
       "confidence": 0.99447,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "no",
       "start": 1728474,
       "end": 1728734,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "longer",
       "start": 1728772,
       "end": 1729022,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 1729076,
       "end": 1729294,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "person",
       "start": 1729332,
       "end": 1729582,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 1729636,
       "end": 1729854,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 1729892,
       "end": 1730046,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 1730068,
       "end": 1730254,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "depend",
       "start": 1730292,
       "end": 1730638,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "on",
       "start": 1730724,
       "end": 1731360,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "in",
       "start": 1732050,
       "end": 1732366,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "an",
       "start": 1732388,
       "end": 1732814,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "important",
       "start": 1732932,
       "end": 1733502,
       "confidence": 0.95929,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "economic",
       "start": 1733636,
       "end": 1734234,
       "confidence": 0.99993,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "way,",
       "start": 1734282,
       "end": 1734542,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "then",
       "start": 1734596,
       "end": 1735200,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 1736870,
       "end": 1737234,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "effects",
       "start": 1737272,
       "end": 1737854,
       "confidence": 0.90879,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 1737902,
       "end": 1738114,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that.",
       "start": 1738152,
       "end": 1738740,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1739830,
       "end": 1740194,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feel",
       "start": 1740232,
       "end": 1740434,
       "confidence": 0.99996,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "sorry",
       "start": 1740472,
       "end": 1740722,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1740776,
       "end": 1740994,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anybody",
       "start": 1741032,
       "end": 1741330,
       "confidence": 0.99921,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "that's",
       "start": 1741400,
       "end": 1741678,
       "confidence": 0.64938,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "working",
       "start": 1741694,
       "end": 1741922,
       "confidence": 0.8988,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1741976,
       "end": 1742146,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 1742168,
       "end": 1742306,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1742328,
       "end": 1742466,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1742488,
       "end": 1742578,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1742584,
       "end": 1742718,
       "confidence": 0.84765,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 1742734,
       "end": 1742866,
       "confidence": 0.99955,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 1742888,
       "end": 1743026,
       "confidence": 0.99964,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "who",
       "start": 1743048,
       "end": 1743186,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 1743208,
       "end": 1743346,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "names",
       "start": 1743368,
       "end": 1743646,
       "confidence": 0.99903,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "are.",
       "start": 1743678,
       "end": 1743874,
       "confidence": 0.77104,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That's",
       "start": 1743912,
       "end": 1744530,
       "confidence": 0.51325,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 1744950,
       "end": 1745266,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 1745288,
       "end": 1745426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "means",
       "start": 1745448,
       "end": 1745634,
       "confidence": 0.99985,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1745672,
       "end": 1745826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 1745848,
       "end": 1746226,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He",
       "start": 1746328,
       "end": 1746546,
       "confidence": 0.99623,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "isn't",
       "start": 1746568,
       "end": 1746814,
       "confidence": 0.93978,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "such",
       "start": 1746862,
       "end": 1747074,
       "confidence": 0.98388,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 1747112,
       "end": 1747314,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "unlikable",
       "start": 1747352,
       "end": 1747902,
       "confidence": 0.84577,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "fellow",
       "start": 1747966,
       "end": 1748690,
       "confidence": 0.73112,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 1751210,
       "end": 1751526,
       "confidence": 0.99931,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1751548,
       "end": 1751638,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "visitor",
       "start": 1751644,
       "end": 1752114,
       "confidence": 0.99888,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1752162,
       "end": 1752278,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "come",
       "start": 1752284,
       "end": 1752406,
       "confidence": 0.9998,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1752428,
       "end": 1752566,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Chicago",
       "start": 1752588,
       "end": 1753106,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1753138,
       "end": 1753238,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "go",
       "start": 1753244,
       "end": 1753366,
       "confidence": 0.93,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1753388,
       "end": 1753526,
       "confidence": 0.76,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 1753548,
       "end": 1753686,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "dinner",
       "start": 1753708,
       "end": 1753954,
       "confidence": 0.77717,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 1754002,
       "end": 1754166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1754188,
       "end": 1754326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "go",
       "start": 1754348,
       "end": 1754486,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1754508,
       "end": 1754694,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "movie",
       "start": 1754732,
       "end": 1755026,
       "confidence": 0.99258,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 1755058,
       "end": 1755302,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1755356,
       "end": 1755622,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "put",
       "start": 1755676,
       "end": 1755846,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 1755868,
       "end": 1756054,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1756092,
       "end": 1756246,
       "confidence": 0.7,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "train,",
       "start": 1756268,
       "end": 1756840,
       "confidence": 0.99977,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 1757290,
       "end": 1757654,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 1757692,
       "end": 1757894,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1757932,
       "end": 1758182,
       "confidence": 0.98922,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "depends",
       "start": 1758236,
       "end": 1758546,
       "confidence": 0.99991,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 1758578,
       "end": 1758726,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "whether",
       "start": 1758748,
       "end": 1758934,
       "confidence": 0.99995,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 1758972,
       "end": 1759234,
       "confidence": 0.81805,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1759282,
       "end": 1759446,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "month",
       "start": 1759468,
       "end": 1759702,
       "confidence": 0.99939,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "getting",
       "start": 1759756,
       "end": 1759974,
       "confidence": 0.99951,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "drunk",
       "start": 1760012,
       "end": 1760226,
       "confidence": 0.99253,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 1760258,
       "end": 1760406,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1760428,
       "end": 1760614,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "month's",
       "start": 1760652,
       "end": 1760910,
       "confidence": 0.84846,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not,",
       "start": 1760930,
       "end": 1761162,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1761216,
       "end": 1761434,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1761472,
       "end": 1761578,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 1761584,
       "end": 1761754,
       "confidence": 0.99996,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "drunk",
       "start": 1761792,
       "end": 1762054,
       "confidence": 0.99944,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 1762102,
       "end": 1762314,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1762352,
       "end": 1762458,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "so",
       "start": 1762464,
       "end": 1762634,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "forth.",
       "start": 1762672,
       "end": 1762934,
       "confidence": 0.99523,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He's",
       "start": 1762982,
       "end": 1763206,
       "confidence": 0.5424,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 1763238,
       "end": 1763386,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "right",
       "start": 1763408,
       "end": 1763690,
       "confidence": 0.81,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1763760,
       "end": 1763946,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that.",
       "start": 1763968,
       "end": 1764634,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He",
       "start": 1764832,
       "end": 1765146,
       "confidence": 0.99333,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 1765168,
       "end": 1765354,
       "confidence": 0.78644,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "isn't",
       "start": 1765392,
       "end": 1765606,
       "confidence": 0.70562,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "worth",
       "start": 1765638,
       "end": 1766026,
       "confidence": 0.94855,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1766128,
       "end": 1766346,
       "confidence": 0.78,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "box",
       "start": 1766368,
       "end": 1766890,
       "confidence": 0.31837,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1767040,
       "end": 1767402,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1767456,
       "end": 1767818,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "from",
       "start": 1767904,
       "end": 1768202,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1768256,
       "end": 1768474,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "viewpoint.",
       "start": 1768512,
       "end": 1769370,
       "confidence": 0.64519,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 1770350,
       "end": 1770714,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1770752,
       "end": 1770954,
       "confidence": 0.99929,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1770992,
       "end": 1771146,
       "confidence": 0.98516,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just,",
       "start": 1771168,
       "end": 1771260,
       "confidence": 0.79854,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh.",
       "start": 1771260,
       "end": 1771560,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Really",
       "start": 1771792,
       "end": 1772094,
       "confidence": 0.92197,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "though,",
       "start": 1772132,
       "end": 1772622,
       "confidence": 0.8668,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Larry,",
       "start": 1772756,
       "end": 1773146,
       "confidence": 0.73598,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I'm",
       "start": 1773178,
       "end": 1773290,
       "confidence": 0.64693,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "just",
       "start": 1773290,
       "end": 1773454,
       "confidence": 0.88228,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying",
       "start": 1773492,
       "end": 1773790,
       "confidence": 0.99273,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 1773860,
       "end": 1774046,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "can",
       "start": 1774068,
       "end": 1774206,
       "confidence": 0.63177,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "get",
       "start": 1774228,
       "end": 1774366,
       "confidence": 0.99927,
       "score": 37
     },
     {
       "speaker": "B",
       "text": "along",
       "start": 1774388,
       "end": 1774622,
       "confidence": 0.99985,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "with",
       "start": 1774676,
       "end": 1775086,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 1775188,
       "end": 1775502,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "guy",
       "start": 1775556,
       "end": 1776160,
       "confidence": 0.98846,
       "score": 8
     },
     {
       "speaker": "B",
       "text": "pretty",
       "start": 1777250,
       "end": 1777662,
       "confidence": 0.99873,
       "score": 9
     },
     {
       "speaker": "B",
       "text": "well",
       "start": 1777716,
       "end": 1778320,
       "confidence": 0.98599,
       "score": 16
     },
     {
       "speaker": "B",
       "text": "on",
       "start": 1779490,
       "end": 1779806,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 1779828,
       "end": 1779966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "friendship",
       "start": 1779988,
       "end": 1780442,
       "confidence": 0.99235,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "basis.",
       "start": 1780506,
       "end": 1781310,
       "confidence": 0.9696,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Just",
       "start": 1782610,
       "end": 1782974,
       "confidence": 0.99893,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "so",
       "start": 1783012,
       "end": 1783214,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "long",
       "start": 1783252,
       "end": 1783406,
       "confidence": 0.99934,
       "score": 12
     },
     {
       "speaker": "B",
       "text": "as",
       "start": 1783428,
       "end": 1783566,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "he",
       "start": 1783588,
       "end": 1783726,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "isn't",
       "start": 1783748,
       "end": 1783946,
       "confidence": 0.9993,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "your",
       "start": 1783978,
       "end": 1784174,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "boss",
       "start": 1784212,
       "end": 1784506,
       "confidence": 0.9995,
       "score": 14
     },
     {
       "speaker": "B",
       "text": "anymore.",
       "start": 1784538,
       "end": 1785310,
       "confidence": 0.91882,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "These",
       "start": 1785730,
       "end": 1786286,
       "confidence": 0.99978,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "bad",
       "start": 1786388,
       "end": 1786702,
       "confidence": 0.99987,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "features",
       "start": 1786756,
       "end": 1787226,
       "confidence": 0.94868,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "don't",
       "start": 1787258,
       "end": 1787466,
       "confidence": 0.99886,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "bother",
       "start": 1787498,
       "end": 1787834,
       "confidence": 0.99957,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "you,",
       "start": 1787882,
       "end": 1788334,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "it's",
       "start": 1788452,
       "end": 1788826,
       "confidence": 0.94204,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "tough",
       "start": 1788858,
       "end": 1789066,
       "confidence": 0.9869,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "on",
       "start": 1789098,
       "end": 1789294,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "somebody",
       "start": 1789332,
       "end": 1789630,
       "confidence": 0.99985,
       "score": 8
     },
     {
       "speaker": "B",
       "text": "else.",
       "start": 1789700,
       "end": 1790320,
       "confidence": 0.85514,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "But",
       "start": 1791330,
       "end": 1791886,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 1791988,
       "end": 1792266,
       "confidence": 0.62,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "really",
       "start": 1792308,
       "end": 1792562,
       "confidence": 0.99995,
       "score": 17
     },
     {
       "speaker": "B",
       "text": "doesn't",
       "start": 1792616,
       "end": 1792926,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "upset",
       "start": 1792958,
       "end": 1793406,
       "confidence": 0.85058,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 1793438,
       "end": 1793586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 1793608,
       "end": 1793746,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 1793768,
       "end": 1793906,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "him",
       "start": 1793928,
       "end": 1794114,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "be",
       "start": 1794152,
       "end": 1794306,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 1794328,
       "end": 1794418,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "way",
       "start": 1794424,
       "end": 1794594,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "B",
       "text": "he",
       "start": 1794632,
       "end": 1794834,
       "confidence": 0.99763,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "is?",
       "start": 1794872,
       "end": 1795410,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "No.",
       "start": 1795560,
       "end": 1796018,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "As",
       "start": 1796104,
       "end": 1796354,
       "confidence": 0.91956,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "long",
       "start": 1796392,
       "end": 1796546,
       "confidence": 0.99999,
       "score": 12
     },
     {
       "speaker": "B",
       "text": "as",
       "start": 1796568,
       "end": 1796754,
       "confidence": 0.99972,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "he",
       "start": 1796792,
       "end": 1796946,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "isn't",
       "start": 1796968,
       "end": 1797650,
       "confidence": 0.99957,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "controlling",
       "start": 1798150,
       "end": 1798894,
       "confidence": 0.99992,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "you.",
       "start": 1798942,
       "end": 1799490,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah,",
       "start": 1799640,
       "end": 1800340,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 1800950,
       "end": 1801278,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doesn't",
       "start": 1801304,
       "end": 1801666,
       "confidence": 0.69502,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "upset",
       "start": 1801698,
       "end": 1802066,
       "confidence": 0.99594,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1802098,
       "end": 1802294,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "too,",
       "start": 1802332,
       "end": 1802534,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 1802572,
       "end": 1802822,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1802876,
       "end": 1803046,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1803068,
       "end": 1803266,
       "confidence": 0.99896,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 1803298,
       "end": 1803542,
       "confidence": 0.99996,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1803596,
       "end": 1803766,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 1803788,
       "end": 1804022,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1804076,
       "end": 1804246,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 1804268,
       "end": 1804454,
       "confidence": 0.64,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1804492,
       "end": 1804646,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 1804668,
       "end": 1804854,
       "confidence": 0.59,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "either.",
       "start": 1804892,
       "end": 1805190,
       "confidence": 0.99853,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1805260,
       "end": 1805446,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 1805468,
       "end": 1805606,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1805628,
       "end": 1805766,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 1805788,
       "end": 1805926,
       "confidence": 0.99996,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "upset",
       "start": 1805948,
       "end": 1806306,
       "confidence": 0.79813,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1806338,
       "end": 1806486,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1806508,
       "end": 1806598,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "little.",
       "start": 1806604,
       "end": 1807060,
       "confidence": 0.99987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 1807060,
       "end": 1807360,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 1807360,
       "end": 1807622,
       "confidence": 0.72168,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "after",
       "start": 1807676,
       "end": 1807942,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1807996,
       "end": 1808166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "left",
       "start": 1808188,
       "end": 1808470,
       "confidence": 0.99991,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 1808540,
       "end": 1808774,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1808812,
       "end": 1808966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1808988,
       "end": 1809234,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "still",
       "start": 1809292,
       "end": 1809466,
       "confidence": 0.94988,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "knew",
       "start": 1809488,
       "end": 1809626,
       "confidence": 0.95531,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1809648,
       "end": 1809786,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "whole",
       "start": 1809808,
       "end": 1809994,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "crew",
       "start": 1810032,
       "end": 1810326,
       "confidence": 0.99943,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "over",
       "start": 1810358,
       "end": 1810506,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 1810528,
       "end": 1810666,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1810688,
       "end": 1810826,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "used",
       "start": 1810848,
       "end": 1810986,
       "confidence": 0.99991,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1811008,
       "end": 1811194,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bother",
       "start": 1811232,
       "end": 1811574,
       "confidence": 0.99949,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 1811622,
       "end": 1812220,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "If",
       "start": 1831650,
       "end": 1831966,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 1831988,
       "end": 1832078,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "could",
       "start": 1832084,
       "end": 1832398,
       "confidence": 0.52722,
       "score": 16
     },
     {
       "speaker": "B",
       "text": "still",
       "start": 1832484,
       "end": 1832782,
       "confidence": 0.99999,
       "score": 7
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 1832836,
       "end": 1833440,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "some",
       "start": 1834230,
       "end": 1834738,
       "confidence": 0.99582,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "feeling",
       "start": 1834824,
       "end": 1835342,
       "confidence": 0.99927,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "for",
       "start": 1835406,
       "end": 1835634,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 1835672,
       "end": 1835874,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "people",
       "start": 1835912,
       "end": 1836498,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "B",
       "text": "who",
       "start": 1836664,
       "end": 1836994,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "are",
       "start": 1837032,
       "end": 1837426,
       "confidence": 0.96154,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "under",
       "start": 1837528,
       "end": 1838082,
       "confidence": 0.61114,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "him,",
       "start": 1838216,
       "end": 1838802,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 1838936,
       "end": 1839234,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "would",
       "start": 1839272,
       "end": 1839474,
       "confidence": 0.99994,
       "score": 26
     },
     {
       "speaker": "B",
       "text": "still",
       "start": 1839512,
       "end": 1839762,
       "confidence": 0.99992,
       "score": 7
     },
     {
       "speaker": "B",
       "text": "disturb",
       "start": 1839816,
       "end": 1840366,
       "confidence": 0.97145,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "you.",
       "start": 1840398,
       "end": 1840834,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Yeah,",
       "start": 1840952,
       "end": 1841618,
       "confidence": 0.52,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that's",
       "start": 1841784,
       "end": 1842158,
       "confidence": 0.7875,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "going",
       "start": 1842174,
       "end": 1842354,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "B",
       "text": "on",
       "start": 1842392,
       "end": 1842546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 1842568,
       "end": 1842706,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "somebody,",
       "start": 1842728,
       "end": 1843010,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 1843080,
       "end": 1843314,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "know.",
       "start": 1843352,
       "end": 1843794,
       "confidence": 0.55064,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah.",
       "start": 1843912,
       "end": 1844580,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 1845110,
       "end": 1845570,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "now",
       "start": 1845640,
       "end": 1845874,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that,",
       "start": 1845912,
       "end": 1846180,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1846180,
       "end": 1846860,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1846860,
       "end": 1847078,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1847084,
       "end": 1847266,
       "confidence": 0.59426,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 1847298,
       "end": 1847446,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "there's",
       "start": 1847468,
       "end": 1847666,
       "confidence": 0.99882,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1847698,
       "end": 1847798,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "person",
       "start": 1847804,
       "end": 1848022,
       "confidence": 0.99998,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "over",
       "start": 1848076,
       "end": 1848294,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 1848332,
       "end": 1848534,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1848572,
       "end": 1848774,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1848812,
       "end": 1848966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know,",
       "start": 1848988,
       "end": 1849560,
       "confidence": 0.99973,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "actually,",
       "start": 1853370,
       "end": 1853460,
       "confidence": 0.68261,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 1853460,
       "end": 1853500,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1853836,
       "end": 1854054,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1854092,
       "end": 1854246,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it's",
       "start": 1854268,
       "end": 1854418,
       "confidence": 0.99928,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 1854434,
       "end": 1854566,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "regrettable",
       "start": 1854588,
       "end": 1855154,
       "confidence": 0.93817,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1855202,
       "end": 1855366,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 1855388,
       "end": 1855586,
       "confidence": 0.81984,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1855618,
       "end": 1855766,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 1855788,
       "end": 1855926,
       "confidence": 1.0,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1855948,
       "end": 1856086,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1856108,
       "end": 1856246,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "boss.",
       "start": 1856268,
       "end": 1856642,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 1856706,
       "end": 1857320,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1857690,
       "end": 1858054,
       "confidence": 0.69,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "guess",
       "start": 1858092,
       "end": 1858246,
       "confidence": 0.99998,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 1858268,
       "end": 1858546,
       "confidence": 0.89972,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "no.",
       "start": 1858578,
       "end": 1859074,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Well,",
       "start": 1859212,
       "end": 1859466,
       "confidence": 0.97543,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1859488,
       "end": 1859626,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1859648,
       "end": 1859834,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "worse",
       "start": 1859872,
       "end": 1860038,
       "confidence": 0.99997,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 1860054,
       "end": 1860186,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1860208,
       "end": 1860394,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "average,",
       "start": 1860432,
       "end": 1860854,
       "confidence": 0.81753,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1860902,
       "end": 1861114,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1861152,
       "end": 1861306,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "guess",
       "start": 1861328,
       "end": 1861706,
       "confidence": 0.99222,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 1861808,
       "end": 1862074,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 1862112,
       "end": 1862602,
       "confidence": 0.99388,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "20%",
       "start": 1862736,
       "end": 1863482,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1863536,
       "end": 1863658,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1863664,
       "end": 1863738,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "world",
       "start": 1863744,
       "end": 1863962,
       "confidence": 0.99999,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "worse",
       "start": 1864016,
       "end": 1864246,
       "confidence": 0.99997,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 1864278,
       "end": 1864426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1864448,
       "end": 1864634,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1864672,
       "end": 1864874,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 1864912,
       "end": 1865114,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something.",
       "start": 1865152,
       "end": 1865740,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 1867960,
       "end": 1870520,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1870520,
       "end": 1870714,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1870752,
       "end": 1870954,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1870992,
       "end": 1871194,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "stepped",
       "start": 1871232,
       "end": 1871606,
       "confidence": 0.28607,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "too.",
       "start": 1871638,
       "end": 1871882,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1871936,
       "end": 1872154,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1872192,
       "end": 1872394,
       "confidence": 0.99527,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 1872432,
       "end": 1872970,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 1873120,
       "end": 1873446,
       "confidence": 0.49,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1873488,
       "end": 1873646,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sister,",
       "start": 1873668,
       "end": 1873962,
       "confidence": 0.99575,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "only",
       "start": 1874026,
       "end": 1874302,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 1874356,
       "end": 1874526,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 1874548,
       "end": 1874734,
       "confidence": 0.99986,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 1874772,
       "end": 1874974,
       "confidence": 0.99708,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bad.",
       "start": 1875012,
       "end": 1875600,
       "confidence": 0.98729,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 1876400,
       "end": 1878800,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 1878800,
       "end": 1879102,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there's,",
       "start": 1879156,
       "end": 1879600,
       "confidence": 0.8082,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1879600,
       "end": 1880180,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1880180,
       "end": 1880334,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "army.",
       "start": 1880372,
       "end": 1880746,
       "confidence": 0.99745,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1880778,
       "end": 1880926,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "never",
       "start": 1880948,
       "end": 1881182,
       "confidence": 0.99942,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "stayed",
       "start": 1881236,
       "end": 1881546,
       "confidence": 0.99863,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "under",
       "start": 1881578,
       "end": 1881774,
       "confidence": 0.99985,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1881812,
       "end": 1881966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 1881988,
       "end": 1882222,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "guy",
       "start": 1882276,
       "end": 1882542,
       "confidence": 0.96251,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "long",
       "start": 1882596,
       "end": 1882814,
       "confidence": 0.99966,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "enough",
       "start": 1882852,
       "end": 1883150,
       "confidence": 0.99975,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1883220,
       "end": 1883840,
       "confidence": 0.57,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fellow",
       "start": 1885090,
       "end": 1885594,
       "confidence": 0.58732,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1885642,
       "end": 1885854,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "nine",
       "start": 1885892,
       "end": 1886094,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "months,",
       "start": 1886132,
       "end": 1886382,
       "confidence": 0.99894,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1886436,
       "end": 1886654,
       "confidence": 0.66,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Aleutians.",
       "start": 1886692,
       "end": 1887318,
       "confidence": 0.20049,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1887354,
       "end": 1887458,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1887464,
       "end": 1887586,
       "confidence": 0.98896,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "under",
       "start": 1887608,
       "end": 1887794,
       "confidence": 0.99479,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1887832,
       "end": 1887986,
       "confidence": 0.78,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "captain",
       "start": 1888008,
       "end": 1888850,
       "confidence": 0.99,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1889670,
       "end": 1890034,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "South",
       "start": 1890072,
       "end": 1890382,
       "confidence": 0.47,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "America",
       "start": 1890446,
       "end": 1891406,
       "confidence": 0.78376,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1891598,
       "end": 1891906,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1891928,
       "end": 1892066,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "year",
       "start": 1892088,
       "end": 1892226,
       "confidence": 0.99936,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1892248,
       "end": 1892386,
       "confidence": 0.7,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a.",
       "start": 1892408,
       "end": 1892720,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Ah.",
       "start": 1892720,
       "end": 1894270,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Oh,",
       "start": 1894270,
       "end": 1894690,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1894760,
       "end": 1894946,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 1894968,
       "end": 1895106,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1895128,
       "end": 1895266,
       "confidence": 0.99988,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1895288,
       "end": 1895378,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lieutenant",
       "start": 1895384,
       "end": 1895806,
       "confidence": 0.99915,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1895838,
       "end": 1895986,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "South",
       "start": 1896008,
       "end": 1896206,
       "confidence": 0.95,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "America",
       "start": 1896238,
       "end": 1896654,
       "confidence": 0.79971,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1896702,
       "end": 1896866,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fits",
       "start": 1896888,
       "end": 1897178,
       "confidence": 0.48748,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1897214,
       "end": 1897414,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pattern.",
       "start": 1897452,
       "end": 1898230,
       "confidence": 0.99902,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1899210,
       "end": 1899574,
       "confidence": 0.57,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "actually",
       "start": 1899612,
       "end": 1899862,
       "confidence": 0.99956,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1899916,
       "end": 1900086,
       "confidence": 0.99978,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1900108,
       "end": 1900294,
       "confidence": 0.98677,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "our",
       "start": 1900332,
       "end": 1900486,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "immediate",
       "start": 1900508,
       "end": 1900994,
       "confidence": 0.9974,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "boss.",
       "start": 1901042,
       "end": 1901778,
       "confidence": 0.99963,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1901954,
       "end": 1902246,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 1902268,
       "end": 1902454,
       "confidence": 0.77728,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1902492,
       "end": 1902694,
       "confidence": 0.78261,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1902732,
       "end": 1902982,
       "confidence": 0.99974,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the,",
       "start": 1903036,
       "end": 1903640,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1907210,
       "end": 1907526,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1907548,
       "end": 1907686,
       "confidence": 0.7233,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 1907708,
       "end": 1907894,
       "confidence": 0.9997,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 1907932,
       "end": 1908518,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1908684,
       "end": 1909014,
       "confidence": 0.59654,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1909052,
       "end": 1909254,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "around.",
       "start": 1909292,
       "end": 1909698,
       "confidence": 0.99963,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He",
       "start": 1909804,
       "end": 1910074,
       "confidence": 0.99951,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1910112,
       "end": 1910506,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1910608,
       "end": 1910826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "group",
       "start": 1910848,
       "end": 1911082,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "leader,",
       "start": 1911136,
       "end": 1911878,
       "confidence": 0.98783,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1912054,
       "end": 1912394,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "direct",
       "start": 1912432,
       "end": 1912730,
       "confidence": 0.99999,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "contact",
       "start": 1912800,
       "end": 1913274,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "boss.",
       "start": 1913392,
       "end": 1914090,
       "confidence": 0.84115,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1914590,
       "end": 1914954,
       "confidence": 0.59,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1914992,
       "end": 1915146,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 1915168,
       "end": 1915306,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 1915328,
       "end": 1915514,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1915552,
       "end": 1915802,
       "confidence": 0.99976,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "remote.",
       "start": 1915856,
       "end": 1916390,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He",
       "start": 1916470,
       "end": 1916666,
       "confidence": 0.91967,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1916688,
       "end": 1916826,
       "confidence": 0.83035,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "off",
       "start": 1916848,
       "end": 1917034,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1917072,
       "end": 1917226,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "office",
       "start": 1917248,
       "end": 1917578,
       "confidence": 0.98,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "somewhere.",
       "start": 1917664,
       "end": 1918410,
       "confidence": 0.98187,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1919310,
       "end": 1919800,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1919800,
       "end": 1920000,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1920000,
       "end": 1920234,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1920272,
       "end": 1920426,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1920448,
       "end": 1920586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 1920608,
       "end": 1921034,
       "confidence": 0.99202,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "first",
       "start": 1921152,
       "end": 1921482,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "class",
       "start": 1921536,
       "end": 1921910,
       "confidence": 0.82187,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "bastard",
       "start": 1922000,
       "end": 1922442,
       "confidence": 0.8618,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "from",
       "start": 1922506,
       "end": 1922686,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 1922708,
       "end": 1922894,
       "confidence": 0.56,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "viewpoint.",
       "start": 1922932,
       "end": 1923790,
       "confidence": 0.90195,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Bow",
       "start": 1925570,
       "end": 1925898,
       "confidence": 0.224,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "down",
       "start": 1925914,
       "end": 1926094,
       "confidence": 0.41,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1926132,
       "end": 1926286,
       "confidence": 0.62,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "par",
       "start": 1926308,
       "end": 1926494,
       "confidence": 0.61638,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 1926532,
       "end": 1926686,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1926708,
       "end": 1926798,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "worst",
       "start": 1926804,
       "end": 1927034,
       "confidence": 0.98954,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1927082,
       "end": 1927246,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 1927268,
       "end": 1927454,
       "confidence": 0.99979,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1927492,
       "end": 1927646,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "these.",
       "start": 1927668,
       "end": 1928240,
       "confidence": 0.99674,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 1929570,
       "end": 1930320,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1930850,
       "end": 1931166,
       "confidence": 0.99569,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1931188,
       "end": 1931326,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1931348,
       "end": 1931486,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sad",
       "start": 1931508,
       "end": 1931754,
       "confidence": 0.62485,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "case",
       "start": 1931802,
       "end": 1932110,
       "confidence": 0.99894,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "anyway.",
       "start": 1932180,
       "end": 1932702,
       "confidence": 0.99117,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He",
       "start": 1932836,
       "end": 1933086,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1933108,
       "end": 1933294,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "down",
       "start": 1933332,
       "end": 1933486,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 1933508,
       "end": 1933694,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1933732,
       "end": 1933886,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 1933908,
       "end": 1934094,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wife",
       "start": 1934132,
       "end": 1934394,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1934442,
       "end": 1934666,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "home",
       "start": 1934708,
       "end": 1934962,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "dying",
       "start": 1935016,
       "end": 1935470,
       "confidence": 0.74069,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1935550,
       "end": 1935842,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1935896,
       "end": 1936066,
       "confidence": 0.99983,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "couldn't",
       "start": 1936088,
       "end": 1936286,
       "confidence": 0.54853,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 1936318,
       "end": 1936514,
       "confidence": 0.83543,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "away",
       "start": 1936552,
       "end": 1936946,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1937048,
       "end": 1937746,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "had",
       "start": 1937928,
       "end": 1938322,
       "confidence": 0.72256,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 1938376,
       "end": 1938642,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "terrible",
       "start": 1938696,
       "end": 1939054,
       "confidence": 0.81047,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "disease,",
       "start": 1939102,
       "end": 1939582,
       "confidence": 0.95116,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1939646,
       "end": 1939826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1939848,
       "end": 1940046,
       "confidence": 0.99876,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "remember",
       "start": 1940078,
       "end": 1940418,
       "confidence": 0.99969,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "what.",
       "start": 1940504,
       "end": 1940850,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 1940920,
       "end": 1941540,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1942310,
       "end": 1942626,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1942648,
       "end": 1942786,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "driven",
       "start": 1942808,
       "end": 1943118,
       "confidence": 0.99985,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "through",
       "start": 1943134,
       "end": 1943266,
       "confidence": 0.80992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 1943288,
       "end": 1943426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wet",
       "start": 1943448,
       "end": 1943646,
       "confidence": 0.53226,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "sand.",
       "start": 1943678,
       "end": 1944014,
       "confidence": 0.98659,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Anyway,",
       "start": 1944062,
       "end": 1944322,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1944376,
       "end": 1944546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 1944568,
       "end": 1944754,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1944792,
       "end": 1944946,
       "confidence": 0.99961,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1944968,
       "end": 1945540,
       "confidence": 0.99954,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "largely",
       "start": 1946470,
       "end": 1947102,
       "confidence": 0.81839,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "excusable.",
       "start": 1947166,
       "end": 1947838,
       "confidence": 0.91225,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "The",
       "start": 1947934,
       "end": 1948098,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "only",
       "start": 1948104,
       "end": 1948274,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing",
       "start": 1948312,
       "end": 1948466,
       "confidence": 0.9988,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1948488,
       "end": 1948566,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 1948568,
       "end": 1948650,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 1948660,
       "end": 1948834,
       "confidence": 0.99486,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "stay",
       "start": 1948872,
       "end": 1949026,
       "confidence": 0.99999,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 1949048,
       "end": 1949186,
       "confidence": 0.76,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1949208,
       "end": 1949346,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 1949368,
       "end": 1949554,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 1949592,
       "end": 1950274,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1950472,
       "end": 1950834,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "best",
       "start": 1950872,
       "end": 1951074,
       "confidence": 0.99781,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 1951112,
       "end": 1951314,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 1951352,
       "end": 1951614,
       "confidence": 0.99991,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 1951672,
       "end": 1951894,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1951932,
       "end": 1952134,
       "confidence": 0.99916,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wasn't",
       "start": 1952172,
       "end": 1952386,
       "confidence": 0.9997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 1952418,
       "end": 1952518,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1952524,
       "end": 1952646,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "act",
       "start": 1952668,
       "end": 1952902,
       "confidence": 0.99998,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "right",
       "start": 1952956,
       "end": 1953222,
       "confidence": 1.0,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "when",
       "start": 1953276,
       "end": 1953446,
       "confidence": 0.86882,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 1953468,
       "end": 1953654,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "were",
       "start": 1953692,
       "end": 1953894,
       "confidence": 0.99979,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "near",
       "start": 1953932,
       "end": 1954134,
       "confidence": 0.99998,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 1954172,
       "end": 1954326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "So",
       "start": 1954348,
       "end": 1954534,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 1954572,
       "end": 1954774,
       "confidence": 0.99697,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1954812,
       "end": 1954978,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 1954994,
       "end": 1955174,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "around",
       "start": 1955212,
       "end": 1955414,
       "confidence": 0.99994,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "when",
       "start": 1955452,
       "end": 1955606,
       "confidence": 0.9661,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 1955628,
       "end": 1955826,
       "confidence": 0.99983,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "acting.",
       "start": 1955858,
       "end": 1956194,
       "confidence": 0.97366,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That's",
       "start": 1956242,
       "end": 1956418,
       "confidence": 0.99797,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1956434,
       "end": 1956566,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "best",
       "start": 1956588,
       "end": 1956774,
       "confidence": 0.99881,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 1956812,
       "end": 1956918,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 1956924,
       "end": 1957094,
       "confidence": 0.9936,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 1957132,
       "end": 1957334,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 1957372,
       "end": 1957526,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1957548,
       "end": 1957734,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "guy.",
       "start": 1957772,
       "end": 1958360,
       "confidence": 0.63579,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1960330,
       "end": 1960838,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "regret",
       "start": 1960924,
       "end": 1961474,
       "confidence": 0.70289,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1961522,
       "end": 1961890,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1961980,
       "end": 1962186,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 1962208,
       "end": 1962394,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "still",
       "start": 1962432,
       "end": 1962682,
       "confidence": 0.96431,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 1962736,
       "end": 1962954,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 1962992,
       "end": 1963146,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1963168,
       "end": 1963258,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 1963264,
       "end": 1963386,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 1963408,
       "end": 1963546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1963568,
       "end": 1963658,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tells",
       "start": 1963664,
       "end": 1963878,
       "confidence": 0.97139,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 1963894,
       "end": 1964026,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to.",
       "start": 1964048,
       "end": 1964620,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "Um.",
       "start": 1966340,
       "end": 1969100,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 1969100,
       "end": 1969274,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 1969312,
       "end": 1969466,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 1969488,
       "end": 1969674,
       "confidence": 0.84126,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "fit",
       "start": 1969712,
       "end": 1969914,
       "confidence": 0.99752,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1969952,
       "end": 1970106,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pattern.",
       "start": 1970128,
       "end": 1970550,
       "confidence": 0.98022,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Then",
       "start": 1970630,
       "end": 1971260,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1971790,
       "end": 1972106,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "rest",
       "start": 1972128,
       "end": 1972266,
       "confidence": 0.99968,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1972288,
       "end": 1972426,
       "confidence": 0.59,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "men",
       "start": 1972448,
       "end": 1972634,
       "confidence": 0.9895,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 1972672,
       "end": 1972778,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 1972784,
       "end": 1972906,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "army",
       "start": 1972928,
       "end": 1973238,
       "confidence": 0.58679,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 1973254,
       "end": 1973446,
       "confidence": 0.54184,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1973488,
       "end": 1973658,
       "confidence": 0.99911,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "seem",
       "start": 1973674,
       "end": 1973866,
       "confidence": 0.92002,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1973898,
       "end": 1974094,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fit.",
       "start": 1974132,
       "end": 1974720,
       "confidence": 0.99069,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 1976770,
       "end": 1977086,
       "confidence": 0.86712,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "were",
       "start": 1977108,
       "end": 1977246,
       "confidence": 0.95546,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 1977268,
       "end": 1977598,
       "confidence": 0.97836,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 1977684,
       "end": 1977982,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sorts.",
       "start": 1978036,
       "end": 1978830,
       "confidence": 0.99832,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 1979490,
       "end": 1980000,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1980000,
       "end": 1981820,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "most",
       "start": 1981820,
       "end": 1982046,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1982068,
       "end": 1982206,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 1982228,
       "end": 1982366,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "likable",
       "start": 1982388,
       "end": 1982842,
       "confidence": 0.88199,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "fellas,",
       "start": 1982906,
       "end": 1983322,
       "confidence": 0.80654,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1983386,
       "end": 1984000,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 1984710,
       "end": 1985026,
       "confidence": 0.99888,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 1985048,
       "end": 1985186,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 1985208,
       "end": 1985346,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 1985368,
       "end": 1985554,
       "confidence": 0.99998,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "likable,",
       "start": 1985592,
       "end": 1985982,
       "confidence": 0.92501,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 1986046,
       "end": 1986178,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 1986184,
       "end": 1986306,
       "confidence": 0.999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1986328,
       "end": 1986478,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "seem",
       "start": 1986494,
       "end": 1986718,
       "confidence": 0.76856,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1986734,
       "end": 1986818,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 1986824,
       "end": 1986994,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 1987032,
       "end": 1987234,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tight.",
       "start": 1987272,
       "end": 1987970,
       "confidence": 0.91824,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 1988950,
       "end": 1989460,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 1989460,
       "end": 1989720,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 1989720,
       "end": 1990002,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 1990056,
       "end": 1990660,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "working",
       "start": 1992150,
       "end": 1992610,
       "confidence": 0.70222,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "her",
       "start": 1992680,
       "end": 1992914,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "rent",
       "start": 1992952,
       "end": 1993166,
       "confidence": 0.76481,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 1993198,
       "end": 1993298,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "car",
       "start": 1993304,
       "end": 1993570,
       "confidence": 0.99,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "place",
       "start": 1993640,
       "end": 1994066,
       "confidence": 0.99936,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 1994168,
       "end": 1994820,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 1995830,
       "end": 1996194,
       "confidence": 0.99669,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 1996232,
       "end": 1996590,
       "confidence": 0.99514,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "seem",
       "start": 1996670,
       "end": 1997006,
       "confidence": 0.99876,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1997038,
       "end": 1997186,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be.",
       "start": 1997208,
       "end": 1997780,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 1998630,
       "end": 1998946,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "went",
       "start": 1998968,
       "end": 1999154,
       "confidence": 0.99977,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "back",
       "start": 1999192,
       "end": 1999346,
       "confidence": 0.99999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 1999368,
       "end": 1999458,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work.",
       "start": 1999464,
       "end": 1999646,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That",
       "start": 1999688,
       "end": 1999846,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "filling",
       "start": 1999868,
       "end": 2000226,
       "confidence": 0.9973,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "station,",
       "start": 2000258,
       "end": 2000514,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2000562,
       "end": 2000726,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "course,",
       "start": 2000748,
       "end": 2001030,
       "confidence": 0.99853,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "worked",
       "start": 2001100,
       "end": 2001334,
       "confidence": 0.99396,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2001372,
       "end": 2001478,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2001484,
       "end": 2001606,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "couple",
       "start": 2001628,
       "end": 2001766,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2001788,
       "end": 2001926,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "years",
       "start": 2001948,
       "end": 2002518,
       "confidence": 0.99597,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2002684,
       "end": 2002966,
       "confidence": 0.5,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2002988,
       "end": 2003126,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 2003148,
       "end": 2003286,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "into",
       "start": 2003308,
       "end": 2003542,
       "confidence": 0.64818,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "business",
       "start": 2003596,
       "end": 2003910,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 2003980,
       "end": 2004166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 2004188,
       "end": 2004374,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 2004412,
       "end": 2004662,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "sister",
       "start": 2004716,
       "end": 2005430,
       "confidence": 0.9999,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2006010,
       "end": 2006326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "she",
       "start": 2006348,
       "end": 2006534,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ended",
       "start": 2006572,
       "end": 2006866,
       "confidence": 0.99922,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 2006898,
       "end": 2007094,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 2007132,
       "end": 2007334,
       "confidence": 0.99998,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "worse",
       "start": 2007372,
       "end": 2007634,
       "confidence": 0.99904,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 2007682,
       "end": 2007846,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2007868,
       "end": 2008006,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 2008028,
       "end": 2008214,
       "confidence": 0.99774,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "describe.",
       "start": 2008252,
       "end": 2008950,
       "confidence": 0.99292,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But,",
       "start": 2009950,
       "end": 2010360,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2010360,
       "end": 2010660,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'd",
       "start": 2010660,
       "end": 2010806,
       "confidence": 0.85302,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "started",
       "start": 2010838,
       "end": 2011082,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2011136,
       "end": 2011354,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "when",
       "start": 2011392,
       "end": 2011546,
       "confidence": 0.9998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2011568,
       "end": 2011706,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 2011728,
       "end": 2011914,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "five.",
       "start": 2011952,
       "end": 2012540,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That",
       "start": 2014110,
       "end": 2014474,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wasn't",
       "start": 2014512,
       "end": 2014806,
       "confidence": 0.54632,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "too",
       "start": 2014838,
       "end": 2015082,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "terribly",
       "start": 2015136,
       "end": 2015542,
       "confidence": 0.71334,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "surprising.",
       "start": 2015606,
       "end": 2016570,
       "confidence": 0.84849,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 2017710,
       "end": 2018240,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2018240,
       "end": 2018860,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2019870,
       "end": 2020234,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "rent",
       "start": 2020272,
       "end": 2020486,
       "confidence": 0.99053,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2020518,
       "end": 2020618,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "car",
       "start": 2020624,
       "end": 2020842,
       "confidence": 0.99,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "people,",
       "start": 2020896,
       "end": 2021500,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2022110,
       "end": 2022522,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "liked",
       "start": 2022576,
       "end": 2022818,
       "confidence": 0.5812,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2022854,
       "end": 2023006,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "guy",
       "start": 2023028,
       "end": 2023214,
       "confidence": 0.99999,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2023252,
       "end": 2023406,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "worked",
       "start": 2023428,
       "end": 2023614,
       "confidence": 0.88024,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2023652,
       "end": 2023854,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2023892,
       "end": 2024046,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "still",
       "start": 2024068,
       "end": 2024254,
       "confidence": 0.99995,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2024292,
       "end": 2024542,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 2024596,
       "end": 2025294,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2025492,
       "end": 2025950,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "didn't",
       "start": 2026020,
       "end": 2026266,
       "confidence": 0.98346,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2026298,
       "end": 2026446,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2026468,
       "end": 2026606,
       "confidence": 0.66,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2026628,
       "end": 2026814,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2026852,
       "end": 2026958,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2026964,
       "end": 2027086,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "home",
       "start": 2027108,
       "end": 2027294,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "office,",
       "start": 2027332,
       "end": 2027920,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but,",
       "start": 2029090,
       "end": 2029520,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2029520,
       "end": 2029760,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2029760,
       "end": 2030014,
       "confidence": 0.99988,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "didn't",
       "start": 2030052,
       "end": 2030670,
       "confidence": 0.99941,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "show",
       "start": 2031250,
       "end": 2031614,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "up",
       "start": 2031652,
       "end": 2031998,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "very",
       "start": 2032084,
       "end": 2032382,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "often",
       "start": 2032436,
       "end": 2032798,
       "confidence": 0.99999,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2032884,
       "end": 2033086,
       "confidence": 0.42,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something.",
       "start": 2033108,
       "end": 2033390,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2033460,
       "end": 2033694,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 2033732,
       "end": 2033982,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2034036,
       "end": 2034266,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fellow",
       "start": 2034308,
       "end": 2034606,
       "confidence": 0.97264,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2034638,
       "end": 2034786,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 2034808,
       "end": 2034994,
       "confidence": 0.95,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2035032,
       "end": 2035282,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "now,",
       "start": 2035336,
       "end": 2035940,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2036710,
       "end": 2037122,
       "confidence": 0.97664,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "definitely",
       "start": 2037176,
       "end": 2037490,
       "confidence": 0.99988,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2037560,
       "end": 2037746,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2037768,
       "end": 2037906,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 2037928,
       "end": 2038162,
       "confidence": 0.99996,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "again,",
       "start": 2038216,
       "end": 2038820,
       "confidence": 0.99945,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 2041750,
       "end": 2042162,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 2042216,
       "end": 2042434,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "largely,",
       "start": 2042472,
       "end": 2042974,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2043022,
       "end": 2043186,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "seems",
       "start": 2043208,
       "end": 2043442,
       "confidence": 0.84796,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2043496,
       "end": 2043666,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2043688,
       "end": 2043874,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2043912,
       "end": 2044114,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2044152,
       "end": 2044306,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bosses.",
       "start": 2044328,
       "end": 2045102,
       "confidence": 0.99898,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "There's",
       "start": 2045246,
       "end": 2045646,
       "confidence": 0.91396,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2045678,
       "end": 2045874,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "few",
       "start": 2045912,
       "end": 2046162,
       "confidence": 0.91961,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "minor",
       "start": 2046216,
       "end": 2046654,
       "confidence": 0.99994,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "exceptions",
       "start": 2046702,
       "end": 2047214,
       "confidence": 0.9668,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 2047262,
       "end": 2047426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something,",
       "start": 2047448,
       "end": 2047730,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 2047800,
       "end": 2048034,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "quite",
       "start": 2048072,
       "end": 2048274,
       "confidence": 0.99983,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "largely",
       "start": 2048312,
       "end": 2048766,
       "confidence": 0.99997,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2048798,
       "end": 2048958,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2048984,
       "end": 2049126,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2049148,
       "end": 2049286,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bosses.",
       "start": 2049308,
       "end": 2049890,
       "confidence": 0.99727,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2049970,
       "end": 2050550,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "from",
       "start": 2050700,
       "end": 2051062,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2051116,
       "end": 2051286,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 2051308,
       "end": 2051542,
       "confidence": 0.99997,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2051596,
       "end": 2051766,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 2051788,
       "end": 2051974,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "born,",
       "start": 2052012,
       "end": 2052710,
       "confidence": 0.99735,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 2053450,
       "end": 2053814,
       "confidence": 0.76,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2053852,
       "end": 2053958,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them,",
       "start": 2053964,
       "end": 2054134,
       "confidence": 0.62,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2054172,
       "end": 2054326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2054348,
       "end": 2054486,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "longest",
       "start": 2054508,
       "end": 2054834,
       "confidence": 0.99979,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "period",
       "start": 2054882,
       "end": 2055154,
       "confidence": 0.98,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2055202,
       "end": 2055366,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time,",
       "start": 2055388,
       "end": 2055622,
       "confidence": 0.99979,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "had",
       "start": 2055676,
       "end": 2055846,
       "confidence": 0.3366,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2055868,
       "end": 2056006,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "most",
       "start": 2056028,
       "end": 2056262,
       "confidence": 0.58931,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "reception",
       "start": 2056316,
       "end": 2056834,
       "confidence": 0.85,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "born",
       "start": 2056882,
       "end": 2057590,
       "confidence": 0.85165,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2060410,
       "end": 2060726,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 2060748,
       "end": 2060934,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It,",
       "start": 2060972,
       "end": 2061560,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 2061780,
       "end": 2062510,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2070190,
       "end": 2070598,
       "confidence": 0.52716,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sure",
       "start": 2070614,
       "end": 2070842,
       "confidence": 0.64062,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2070896,
       "end": 2071066,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I've",
       "start": 2071088,
       "end": 2071366,
       "confidence": 0.9963,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 2071398,
       "end": 2071594,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "something",
       "start": 2071632,
       "end": 2071882,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2071936,
       "end": 2072106,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 2072128,
       "end": 2072314,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "with,",
       "start": 2072352,
       "end": 2072940,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "let's",
       "start": 2073870,
       "end": 2074294,
       "confidence": 0.78384,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "put",
       "start": 2074342,
       "end": 2074506,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2074528,
       "end": 2074666,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2074688,
       "end": 2074826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way.",
       "start": 2074848,
       "end": 2075420,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Now,",
       "start": 2075790,
       "end": 2076154,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "whether",
       "start": 2076192,
       "end": 2076780,
       "confidence": 0.76766,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2079250,
       "end": 2079662,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing",
       "start": 2079716,
       "end": 2079934,
       "confidence": 0.99998,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "I've",
       "start": 2079972,
       "end": 2080266,
       "confidence": 0.99249,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 2080298,
       "end": 2080542,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "here",
       "start": 2080596,
       "end": 2081200,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 2081650,
       "end": 2082110,
       "confidence": 0.51829,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "talking",
       "start": 2082180,
       "end": 2082414,
       "confidence": 0.99996,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2082452,
       "end": 2082702,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2082756,
       "end": 2083070,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2083140,
       "end": 2083422,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something,",
       "start": 2083476,
       "end": 2084080,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2085090,
       "end": 2085406,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2085428,
       "end": 2085626,
       "confidence": 0.99962,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know,",
       "start": 2085658,
       "end": 2086240,
       "confidence": 0.9955,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "maybe",
       "start": 2087970,
       "end": 2088720,
       "confidence": 0.87981,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2089350,
       "end": 2089714,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sounds",
       "start": 2089752,
       "end": 2090050,
       "confidence": 0.58902,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 2090120,
       "end": 2090354,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sensible",
       "start": 2090392,
       "end": 2090894,
       "confidence": 0.59225,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2090942,
       "end": 2091080,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "m",
       "start": 2091080,
       "end": 2091240,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2091240,
       "end": 2091266,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 2091288,
       "end": 2091474,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2091512,
       "end": 2091666,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 2091688,
       "end": 2091826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 2091848,
       "end": 2091986,
       "confidence": 0.98,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2092008,
       "end": 2092146,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 2092168,
       "end": 2092306,
       "confidence": 0.99797,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "telling",
       "start": 2092328,
       "end": 2092478,
       "confidence": 0.99985,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2092494,
       "end": 2092626,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "about.",
       "start": 2092648,
       "end": 2092834,
       "confidence": 0.99923,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Or",
       "start": 2092872,
       "end": 2093026,
       "confidence": 0.53,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2093048,
       "end": 2093282,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some.",
       "start": 2093336,
       "end": 2093940,
       "confidence": 0.79097,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That",
       "start": 2094870,
       "end": 2095234,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2095272,
       "end": 2095474,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 2095512,
       "end": 2095810,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "end",
       "start": 2095880,
       "end": 2096114,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "up",
       "start": 2096152,
       "end": 2096402,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "being.",
       "start": 2096456,
       "end": 2097060,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "Um.",
       "start": 2102140,
       "end": 2102180,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Hired",
       "start": 2102180,
       "end": 2102722,
       "confidence": 0.98237,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "by",
       "start": 2102786,
       "end": 2103014,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2103052,
       "end": 2103254,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 2103292,
       "end": 2103494,
       "confidence": 1.0,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2103532,
       "end": 2103734,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "person",
       "start": 2103772,
       "end": 2104360,
       "confidence": 0.99998,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 2105050,
       "end": 2105414,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something.",
       "start": 2105452,
       "end": 2106040,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Though",
       "start": 2110250,
       "end": 2110626,
       "confidence": 0.77652,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2110668,
       "end": 2110826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2110848,
       "end": 2111082,
       "confidence": 0.69,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "true,",
       "start": 2111136,
       "end": 2111740,
       "confidence": 0.99373,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 2115470,
       "end": 2115834,
       "confidence": 0.76,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2115872,
       "end": 2116026,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "go",
       "start": 2116048,
       "end": 2116234,
       "confidence": 0.77,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2116272,
       "end": 2116426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2116448,
       "end": 2116586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "job",
       "start": 2116608,
       "end": 2116890,
       "confidence": 1.0,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "interview,",
       "start": 2116960,
       "end": 2117690,
       "confidence": 0.99585,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I,",
       "start": 2118830,
       "end": 2119340,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2119340,
       "end": 2121960,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 2121960,
       "end": 2122254,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2122292,
       "end": 2122590,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "put",
       "start": 2122660,
       "end": 2122894,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 2122932,
       "end": 2123182,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2123236,
       "end": 2123840,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "domineering",
       "start": 2124450,
       "end": 2125790,
       "confidence": 0.87136,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 2127330,
       "end": 2127742,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the,",
       "start": 2127796,
       "end": 2128080,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 2128080,
       "end": 2128560,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2128560,
       "end": 2128858,
       "confidence": 0.9229,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2128874,
       "end": 2129006,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2129028,
       "end": 2129214,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "army",
       "start": 2129252,
       "end": 2129594,
       "confidence": 0.99234,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "sergeant",
       "start": 2129642,
       "end": 2130122,
       "confidence": 0.84447,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 2130186,
       "end": 2130462,
       "confidence": 0.99999,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2130516,
       "end": 2130686,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "boss.",
       "start": 2130708,
       "end": 2131390,
       "confidence": 0.99968,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It's",
       "start": 2131810,
       "end": 2132234,
       "confidence": 0.63971,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "obvious",
       "start": 2132282,
       "end": 2132542,
       "confidence": 0.99999,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2132596,
       "end": 2132766,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anybody",
       "start": 2132788,
       "end": 2133262,
       "confidence": 0.99981,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2133396,
       "end": 2133694,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sees",
       "start": 2133732,
       "end": 2134058,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2134074,
       "end": 2134266,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2134308,
       "end": 2134466,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2134488,
       "end": 2134638,
       "confidence": 0.99938,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not.",
       "start": 2134654,
       "end": 2135220,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2136150,
       "end": 2136514,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "suspect",
       "start": 2136552,
       "end": 2136942,
       "confidence": 0.49524,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2137006,
       "end": 2137186,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "from",
       "start": 2137208,
       "end": 2137394,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2137432,
       "end": 2137634,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "point",
       "start": 2137672,
       "end": 2137874,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2137912,
       "end": 2138066,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "view,",
       "start": 2138088,
       "end": 2138418,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2138504,
       "end": 2138754,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "am",
       "start": 2138792,
       "end": 2139042,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 2139096,
       "end": 2139314,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2139352,
       "end": 2139506,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 2139528,
       "end": 2139810,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "somebody",
       "start": 2139880,
       "end": 2140258,
       "confidence": 0.99991,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2140344,
       "end": 2140546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 2140568,
       "end": 2140802,
       "confidence": 0.73466,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "control.",
       "start": 2140856,
       "end": 2141460,
       "confidence": 0.99985,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Particularly,",
       "start": 2143350,
       "end": 2144174,
       "confidence": 0.99838,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2144222,
       "end": 2144386,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 2144408,
       "end": 2144594,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 2144632,
       "end": 2144834,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "insecure",
       "start": 2144872,
       "end": 2145502,
       "confidence": 0.99024,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "boss",
       "start": 2145566,
       "end": 2146014,
       "confidence": 0.59625,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2146062,
       "end": 2146274,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 2146312,
       "end": 2146418,
       "confidence": 0.99,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2146424,
       "end": 2146546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 2146568,
       "end": 2146802,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2146856,
       "end": 2147026,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2147048,
       "end": 2147282,
       "confidence": 0.64,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "will",
       "start": 2147336,
       "end": 2147506,
       "confidence": 0.99331,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 2147528,
       "end": 2147714,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 2147752,
       "end": 2147906,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "right.",
       "start": 2147928,
       "end": 2148210,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He's",
       "start": 2148280,
       "end": 2148526,
       "confidence": 0.97985,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pretty",
       "start": 2148558,
       "end": 2148802,
       "confidence": 0.99993,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "bright",
       "start": 2148856,
       "end": 2149570,
       "confidence": 0.96548,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2150070,
       "end": 2150434,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2150472,
       "end": 2150674,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 2150712,
       "end": 2150866,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "always",
       "start": 2150888,
       "end": 2151170,
       "confidence": 0.99,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "keep",
       "start": 2151240,
       "end": 2151474,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 2151512,
       "end": 2151714,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "under",
       "start": 2151752,
       "end": 2151954,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 2151992,
       "end": 2152580,
       "confidence": 0.64,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 2153670,
       "end": 2154420,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 2157560,
       "end": 2160300,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 2160300,
       "end": 2160378,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2160544,
       "end": 2160874,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "need",
       "start": 2160912,
       "end": 2161500,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2162270,
       "end": 2162826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "stiffen",
       "start": 2162928,
       "end": 2163366,
       "confidence": 0.83026,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 2163398,
       "end": 2163594,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "backbone",
       "start": 2163632,
       "end": 2164086,
       "confidence": 0.95419,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2164118,
       "end": 2164218,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "little,",
       "start": 2164224,
       "end": 2164442,
       "confidence": 0.71852,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'll",
       "start": 2164496,
       "end": 2164678,
       "confidence": 0.99576,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 2164694,
       "end": 2164874,
       "confidence": 0.93341,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kick",
       "start": 2164912,
       "end": 2165126,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 2165158,
       "end": 2165306,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2165328,
       "end": 2165418,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2165424,
       "end": 2165546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "butt",
       "start": 2165568,
       "end": 2165766,
       "confidence": 0.99835,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "occasionally",
       "start": 2165798,
       "end": 2166422,
       "confidence": 0.80905,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2166486,
       "end": 2166618,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tell",
       "start": 2166624,
       "end": 2166794,
       "confidence": 0.6959,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "him",
       "start": 2166832,
       "end": 2166938,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2166944,
       "end": 2167066,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "straighten",
       "start": 2167088,
       "end": 2167494,
       "confidence": 0.69523,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 2167542,
       "end": 2168140,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "or,",
       "start": 2169070,
       "end": 2169540,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2169540,
       "end": 2169960,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something.",
       "start": 2169960,
       "end": 2170620,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2171230,
       "end": 2171702,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anyway,",
       "start": 2171776,
       "end": 2172400,
       "confidence": 0.99514,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2174450,
       "end": 2174906,
       "confidence": 0.99423,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not,",
       "start": 2174938,
       "end": 2175340,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2175340,
       "end": 2177220,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "drill",
       "start": 2177220,
       "end": 2177562,
       "confidence": 0.51281,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "sergeant",
       "start": 2177626,
       "end": 2178202,
       "confidence": 0.99957,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "type,",
       "start": 2178266,
       "end": 2178880,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and,",
       "start": 2179810,
       "end": 2180240,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2180240,
       "end": 2183060,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2183060,
       "end": 2183374,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2183412,
       "end": 2183614,
       "confidence": 0.99998,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 2183652,
       "end": 2184250,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2184420,
       "end": 2184658,
       "confidence": 0.5,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 2184664,
       "end": 2184834,
       "confidence": 0.97318,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that's",
       "start": 2184872,
       "end": 2185086,
       "confidence": 0.92105,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "very",
       "start": 2185118,
       "end": 2185362,
       "confidence": 0.99846,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "obvious.",
       "start": 2185416,
       "end": 2186020,
       "confidence": 0.99969,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2186790,
       "end": 2187540,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2188390,
       "end": 2188802,
       "confidence": 0.5311,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "might",
       "start": 2188856,
       "end": 2189122,
       "confidence": 0.9999,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "tend",
       "start": 2189176,
       "end": 2189406,
       "confidence": 0.99664,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2189438,
       "end": 2189586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pick",
       "start": 2189608,
       "end": 2189794,
       "confidence": 0.99924,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2189832,
       "end": 2190034,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 2190072,
       "end": 2190226,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2190248,
       "end": 2190386,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2190408,
       "end": 2190546,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bunch.",
       "start": 2190568,
       "end": 2191250,
       "confidence": 0.97622,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Here.",
       "start": 2209550,
       "end": 2209914,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 2209952,
       "end": 2210106,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "get",
       "start": 2210128,
       "end": 2210266,
       "confidence": 0.99851,
       "score": 37
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 2210288,
       "end": 2210474,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 2210512,
       "end": 2210726,
       "confidence": 0.99884,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying,",
       "start": 2210758,
       "end": 2211340,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "here's",
       "start": 2212350,
       "end": 2212854,
       "confidence": 0.53643,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "my",
       "start": 2212902,
       "end": 2213114,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "appraisal",
       "start": 2213152,
       "end": 2213686,
       "confidence": 0.92664,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 2213718,
       "end": 2213866,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "myself.",
       "start": 2213888,
       "end": 2214460,
       "confidence": 0.99684,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 2216430,
       "end": 2216794,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "am",
       "start": 2216832,
       "end": 2217082,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "probably",
       "start": 2217136,
       "end": 2217354,
       "confidence": 0.99996,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 2217392,
       "end": 2217546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 2217568,
       "end": 2217706,
       "confidence": 0.99999,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 2217728,
       "end": 2217866,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "guy",
       "start": 2217888,
       "end": 2218074,
       "confidence": 1.0,
       "score": 8
     },
     {
       "speaker": "B",
       "text": "who",
       "start": 2218112,
       "end": 2218362,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "looks",
       "start": 2218416,
       "end": 2219020,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "pretty",
       "start": 2220190,
       "end": 2220650,
       "confidence": 0.99998,
       "score": 9
     },
     {
       "speaker": "B",
       "text": "bright",
       "start": 2220720,
       "end": 2221142,
       "confidence": 0.99994,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "but",
       "start": 2221206,
       "end": 2221820,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "controllable.",
       "start": 2222210,
       "end": 2223390,
       "confidence": 0.99514,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 2224050,
       "end": 2224414,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "if",
       "start": 2224452,
       "end": 2224606,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 2224628,
       "end": 2224814,
       "confidence": 0.68,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "run",
       "start": 2224852,
       "end": 2225054,
       "confidence": 0.99987,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "into",
       "start": 2225092,
       "end": 2225294,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "somebody",
       "start": 2225332,
       "end": 2225726,
       "confidence": 0.99996,
       "score": 8
     },
     {
       "speaker": "B",
       "text": "who",
       "start": 2225828,
       "end": 2226478,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "wants",
       "start": 2226644,
       "end": 2227070,
       "confidence": 0.90519,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 2227140,
       "end": 2227760,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "have",
       "start": 2231650,
       "end": 2232062,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 2232116,
       "end": 2232286,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "person",
       "start": 2232308,
       "end": 2232590,
       "confidence": 0.99999,
       "score": 19
     },
     {
       "speaker": "B",
       "text": "like",
       "start": 2232660,
       "end": 2232894,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "B",
       "text": "me",
       "start": 2232932,
       "end": 2233182,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "under",
       "start": 2233236,
       "end": 2233502,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "him,",
       "start": 2233556,
       "end": 2234160,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that's",
       "start": 2235990,
       "end": 2236494,
       "confidence": 0.96934,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "probably",
       "start": 2236542,
       "end": 2237234,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "one",
       "start": 2237432,
       "end": 2237890,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "B",
       "text": "way",
       "start": 2237960,
       "end": 2238338,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 2238424,
       "end": 2238674,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "accounts",
       "start": 2238712,
       "end": 2239118,
       "confidence": 0.99722,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "for",
       "start": 2239134,
       "end": 2239314,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "how",
       "start": 2239352,
       "end": 2239506,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "I",
       "start": 2239528,
       "end": 2239714,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "wind",
       "start": 2239752,
       "end": 2240050,
       "confidence": 0.9971,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "up",
       "start": 2240120,
       "end": 2240740,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "in",
       "start": 2241430,
       "end": 2241794,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "relation",
       "start": 2241832,
       "end": 2242094,
       "confidence": 0.98928,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 2242142,
       "end": 2242306,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 2242328,
       "end": 2242514,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 2242552,
       "end": 2242706,
       "confidence": 0.99993,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 2242728,
       "end": 2242866,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "person.",
       "start": 2242888,
       "end": 2243458,
       "confidence": 0.99954,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Well,",
       "start": 2243624,
       "end": 2243954,
       "confidence": 0.9993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'll",
       "start": 2243992,
       "end": 2244238,
       "confidence": 0.98675,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tell",
       "start": 2244254,
       "end": 2244386,
       "confidence": 0.99998,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2244408,
       "end": 2244594,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this.",
       "start": 2244632,
       "end": 2244930,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Do",
       "start": 2245000,
       "end": 2245186,
       "confidence": 0.66,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2245208,
       "end": 2245298,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2245304,
       "end": 2245474,
       "confidence": 0.99996,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "anything",
       "start": 2245512,
       "end": 2245810,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2245880,
       "end": 2246162,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the,",
       "start": 2246216,
       "end": 2246460,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 2246460,
       "end": 2248200,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "employment,",
       "start": 2248230,
       "end": 2249038,
       "confidence": 0.98039,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "these",
       "start": 2249134,
       "end": 2249682,
       "confidence": 0.99527,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "employee",
       "start": 2249816,
       "end": 2250690,
       "confidence": 0.84083,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "employment",
       "start": 2252630,
       "end": 2253294,
       "confidence": 0.99991,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "agency",
       "start": 2253342,
       "end": 2253786,
       "confidence": 0.50454,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2253838,
       "end": 2254006,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2254028,
       "end": 2254214,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "register",
       "start": 2254252,
       "end": 2254690,
       "confidence": 0.89,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "with?",
       "start": 2254770,
       "end": 2255398,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2255564,
       "end": 2255846,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thought",
       "start": 2255868,
       "end": 2256006,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2256028,
       "end": 2256166,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wanted",
       "start": 2256188,
       "end": 2256374,
       "confidence": 0.65806,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2256412,
       "end": 2256518,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 2256524,
       "end": 2256694,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2256732,
       "end": 2256838,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 2256844,
       "end": 2256966,
       "confidence": 0.62,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2256988,
       "end": 2257078,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 2257084,
       "end": 2257206,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2257228,
       "end": 2257366,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 2257388,
       "end": 2257574,
       "confidence": 0.99,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "strictly",
       "start": 2257612,
       "end": 2257954,
       "confidence": 0.99399,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "commission.",
       "start": 2258002,
       "end": 2258790,
       "confidence": 0.75268,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 2259520,
       "end": 2262180,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they're",
       "start": 2262180,
       "end": 2262406,
       "confidence": 0.92866,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "always",
       "start": 2262438,
       "end": 2262586,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "running",
       "start": 2262608,
       "end": 2262890,
       "confidence": 0.74988,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "ads.",
       "start": 2262960,
       "end": 2263334,
       "confidence": 0.93637,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Later",
       "start": 2263382,
       "end": 2263546,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "on,",
       "start": 2263568,
       "end": 2263706,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2263728,
       "end": 2263866,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "find",
       "start": 2263888,
       "end": 2264170,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2264240,
       "end": 2264426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2264448,
       "end": 2264586,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want",
       "start": 2264608,
       "end": 2264842,
       "confidence": 0.88401,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "counselors.",
       "start": 2264896,
       "end": 2265638,
       "confidence": 0.91651,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That's",
       "start": 2265734,
       "end": 2266182,
       "confidence": 0.99964,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 2266246,
       "end": 2266474,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "way.",
       "start": 2266512,
       "end": 2266714,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Or",
       "start": 2266752,
       "end": 2267002,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "agents",
       "start": 2267056,
       "end": 2267466,
       "confidence": 0.99966,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "or,",
       "start": 2267568,
       "end": 2267960,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2267960,
       "end": 2268120,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something,",
       "start": 2268128,
       "end": 2268538,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "rather.",
       "start": 2268624,
       "end": 2269258,
       "confidence": 0.9977,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Okay.",
       "start": 2269424,
       "end": 2269754,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "You",
       "start": 2269792,
       "end": 2269946,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "learn",
       "start": 2269968,
       "end": 2270154,
       "confidence": 0.93011,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "later",
       "start": 2270192,
       "end": 2270394,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 2270432,
       "end": 2270586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 2270608,
       "end": 2270746,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2270768,
       "end": 2270906,
       "confidence": 0.91112,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "paid",
       "start": 2270928,
       "end": 2271162,
       "confidence": 0.35448,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "ads.",
       "start": 2271216,
       "end": 2271846,
       "confidence": 0.72719,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2271958,
       "end": 2272186,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 2272208,
       "end": 2272394,
       "confidence": 0.77463,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want",
       "start": 2272432,
       "end": 2272586,
       "confidence": 0.99953,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2272608,
       "end": 2272746,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2272768,
       "end": 2272858,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 2272864,
       "end": 2273034,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "long",
       "start": 2273072,
       "end": 2273226,
       "confidence": 0.99991,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "enough",
       "start": 2273248,
       "end": 2273446,
       "confidence": 0.96322,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2273488,
       "end": 2273742,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sell",
       "start": 2273796,
       "end": 2274014,
       "confidence": 0.90873,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2274052,
       "end": 2274206,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 2274228,
       "end": 2274414,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 2274452,
       "end": 2274654,
       "confidence": 0.91,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2274692,
       "end": 2274846,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "look",
       "start": 2274868,
       "end": 2275006,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2275028,
       "end": 2275118,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2275124,
       "end": 2275246,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "job.",
       "start": 2275268,
       "end": 2275840,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2276450,
       "end": 2276766,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 2276788,
       "end": 2276974,
       "confidence": 0.66,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "always",
       "start": 2277012,
       "end": 2277262,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "need",
       "start": 2277316,
       "end": 2277534,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "counselors",
       "start": 2277572,
       "end": 2278106,
       "confidence": 0.97209,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 2278138,
       "end": 2278334,
       "confidence": 0.84394,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they're",
       "start": 2278372,
       "end": 2278618,
       "confidence": 0.74534,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "always",
       "start": 2278634,
       "end": 2278910,
       "confidence": 0.76,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "quit.",
       "start": 2278980,
       "end": 2279610,
       "confidence": 0.46,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Had",
       "start": 2279770,
       "end": 2280094,
       "confidence": 0.44331,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "strict",
       "start": 2280132,
       "end": 2280426,
       "confidence": 0.74595,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "commission",
       "start": 2280458,
       "end": 2280906,
       "confidence": 0.70339,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "job",
       "start": 2280938,
       "end": 2281182,
       "confidence": 0.99998,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 2281236,
       "end": 2281406,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "no",
       "start": 2281428,
       "end": 2281566,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "guarantee",
       "start": 2281588,
       "end": 2282026,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 2282058,
       "end": 2282206,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 2282228,
       "end": 2282414,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2282452,
       "end": 2282606,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 2282628,
       "end": 2283200,
       "confidence": 0.49,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2285730,
       "end": 2286046,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "talked",
       "start": 2286068,
       "end": 2286302,
       "confidence": 0.79097,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2286356,
       "end": 2286526,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "several",
       "start": 2286548,
       "end": 2286826,
       "confidence": 0.99965,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2286858,
       "end": 2286958,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 2286964,
       "end": 2287086,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Of",
       "start": 2287108,
       "end": 2287246,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "course,",
       "start": 2287268,
       "end": 2287406,
       "confidence": 0.99988,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2287428,
       "end": 2287566,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "had,",
       "start": 2287588,
       "end": 2287820,
       "confidence": 0.99978,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2287820,
       "end": 2287960,
       "confidence": 0.79,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2287960,
       "end": 2288146,
       "confidence": 0.83,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2288168,
       "end": 2288258,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "back",
       "start": 2288264,
       "end": 2288386,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2288408,
       "end": 2288498,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 2288504,
       "end": 2288674,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mind",
       "start": 2288712,
       "end": 2288914,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 2288952,
       "end": 2289106,
       "confidence": 0.99894,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "another",
       "start": 2289128,
       "end": 2289362,
       "confidence": 0.99997,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "idea,",
       "start": 2289416,
       "end": 2289682,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "too.",
       "start": 2289736,
       "end": 2289954,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2289992,
       "end": 2290194,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2290232,
       "end": 2290338,
       "confidence": 0.99991,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2290344,
       "end": 2290466,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 2290488,
       "end": 2290626,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "long",
       "start": 2290648,
       "end": 2290786,
       "confidence": 0.99994,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "enough",
       "start": 2290808,
       "end": 2290946,
       "confidence": 0.99998,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2290968,
       "end": 2291106,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "find",
       "start": 2291128,
       "end": 2291314,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2291352,
       "end": 2291458,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "best",
       "start": 2291464,
       "end": 2291634,
       "confidence": 0.9973,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "job",
       "start": 2291672,
       "end": 2291922,
       "confidence": 0.99977,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2291976,
       "end": 2292098,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2292104,
       "end": 2292274,
       "confidence": 0.99985,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "out.",
       "start": 2292312,
       "end": 2292900,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh,",
       "start": 2293880,
       "end": 2294540,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2295510,
       "end": 2295826,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "may",
       "start": 2295848,
       "end": 2295986,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 2296008,
       "end": 2296146,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "known",
       "start": 2296168,
       "end": 2296366,
       "confidence": 0.93723,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2296398,
       "end": 2296546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they're",
       "start": 2296568,
       "end": 2296810,
       "confidence": 0.99932,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pretty",
       "start": 2296830,
       "end": 2297014,
       "confidence": 0.98421,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "bright",
       "start": 2297052,
       "end": 2297266,
       "confidence": 0.99926,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2297298,
       "end": 2297446,
       "confidence": 0.57,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2297468,
       "end": 2297606,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way,",
       "start": 2297628,
       "end": 2298246,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 2298428,
       "end": 2299062,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2299196,
       "end": 2299542,
       "confidence": 0.99974,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "definitely",
       "start": 2299596,
       "end": 2300054,
       "confidence": 0.99961,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "run.",
       "start": 2300172,
       "end": 2300840,
       "confidence": 0.95153,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "You",
       "start": 2302650,
       "end": 2302966,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "almost",
       "start": 2302988,
       "end": 2303270,
       "confidence": 0.99952,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "could",
       "start": 2303340,
       "end": 2303574,
       "confidence": 0.99936,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "call",
       "start": 2303612,
       "end": 2303814,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2303852,
       "end": 2303958,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2303964,
       "end": 2304086,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "racket.",
       "start": 2304108,
       "end": 2304802,
       "confidence": 0.8382,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "In",
       "start": 2304946,
       "end": 2305206,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2305228,
       "end": 2305318,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way.",
       "start": 2305324,
       "end": 2305494,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It's",
       "start": 2305532,
       "end": 2305746,
       "confidence": 0.77406,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 2305778,
       "end": 2305878,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "unpalatable",
       "start": 2305884,
       "end": 2306594,
       "confidence": 0.95564,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "thing",
       "start": 2306642,
       "end": 2306806,
       "confidence": 0.99979,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2306828,
       "end": 2306966,
       "confidence": 0.66193,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "far",
       "start": 2306988,
       "end": 2307126,
       "confidence": 0.98382,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2307148,
       "end": 2307286,
       "confidence": 0.99836,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2307308,
       "end": 2307586,
       "confidence": 0.86267,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "concerned.",
       "start": 2307618,
       "end": 2308418,
       "confidence": 0.69502,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 2308594,
       "end": 2309060,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 2309060,
       "end": 2310460,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 2310460,
       "end": 2310646,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2310668,
       "end": 2310806,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 2310828,
       "end": 2311014,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2311052,
       "end": 2311206,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2311228,
       "end": 2311366,
       "confidence": 0.99983,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2311388,
       "end": 2311526,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "many",
       "start": 2311548,
       "end": 2311734,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "jobs",
       "start": 2311772,
       "end": 2312098,
       "confidence": 0.99994,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2312114,
       "end": 2312246,
       "confidence": 0.88563,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2312268,
       "end": 2312406,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "possibly",
       "start": 2312428,
       "end": 2312754,
       "confidence": 0.97519,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 2312802,
       "end": 2312966,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2312988,
       "end": 2313126,
       "confidence": 0.99996,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "your",
       "start": 2313148,
       "end": 2313298,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "hands",
       "start": 2313324,
       "end": 2313562,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "on,",
       "start": 2313616,
       "end": 2313780,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "m",
       "start": 2313780,
       "end": 2313840,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "by",
       "start": 2313872,
       "end": 2314026,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "hook",
       "start": 2314048,
       "end": 2314326,
       "confidence": 0.46257,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 2314358,
       "end": 2314506,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "crook.",
       "start": 2314528,
       "end": 2315130,
       "confidence": 0.59793,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2315790,
       "end": 2316154,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2316192,
       "end": 2316346,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2316368,
       "end": 2316506,
       "confidence": 0.99998,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2316528,
       "end": 2316666,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "many",
       "start": 2316688,
       "end": 2316826,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2316848,
       "end": 2317130,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "into",
       "start": 2317200,
       "end": 2317434,
       "confidence": 0.98156,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2317472,
       "end": 2317722,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2317776,
       "end": 2317994,
       "confidence": 0.50014,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "your",
       "start": 2318032,
       "end": 2318234,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "desk.",
       "start": 2318272,
       "end": 2318566,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Everybody's",
       "start": 2318598,
       "end": 2319046,
       "confidence": 0.99749,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 2319078,
       "end": 2319226,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 2319248,
       "end": 2319434,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "own.",
       "start": 2319472,
       "end": 2319914,
       "confidence": 0.97141,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2320032,
       "end": 2320314,
       "confidence": 0.53552,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 2320352,
       "end": 2320458,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2320464,
       "end": 2320586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "name",
       "start": 2320608,
       "end": 2320746,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2320768,
       "end": 2320858,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2320864,
       "end": 2320986,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "company",
       "start": 2321008,
       "end": 2321242,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 2321296,
       "end": 2321466,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anything,",
       "start": 2321488,
       "end": 2322060,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2323250,
       "end": 2323710,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2323780,
       "end": 2324014,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "try",
       "start": 2324052,
       "end": 2324206,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2324228,
       "end": 2324318,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2324324,
       "end": 2324446,
       "confidence": 0.99999,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 2324468,
       "end": 2324606,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "paired",
       "start": 2324628,
       "end": 2324922,
       "confidence": 0.97161,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "off.",
       "start": 2324986,
       "end": 2325310,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "So",
       "start": 2325380,
       "end": 2325662,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the,",
       "start": 2325716,
       "end": 2325780,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2325780,
       "end": 2325860,
       "confidence": 0.7,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "universal",
       "start": 2325972,
       "end": 2326506,
       "confidence": 0.99995,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "rule",
       "start": 2326538,
       "end": 2326874,
       "confidence": 0.98401,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2326922,
       "end": 2327182,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2327236,
       "end": 2327454,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2327492,
       "end": 2327694,
       "confidence": 0.99998,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2327732,
       "end": 2327934,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "many",
       "start": 2327972,
       "end": 2328222,
       "confidence": 0.9999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2328276,
       "end": 2328590,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "walking",
       "start": 2328660,
       "end": 2329066,
       "confidence": 0.99951,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2329098,
       "end": 2329294,
       "confidence": 0.78261,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2329332,
       "end": 2329438,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 2329444,
       "end": 2329566,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2329588,
       "end": 2329822,
       "confidence": 0.99999,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "walking.",
       "start": 2329876,
       "end": 2330670,
       "confidence": 0.99882,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "If",
       "start": 2332370,
       "end": 2332782,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you've",
       "start": 2332836,
       "end": 2333146,
       "confidence": 0.99726,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 2333178,
       "end": 2333518,
       "confidence": 0.94,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 2333604,
       "end": 2333950,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 2334020,
       "end": 2334302,
       "confidence": 0.99987,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2334356,
       "end": 2334670,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "line",
       "start": 2334740,
       "end": 2334974,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "up",
       "start": 2335012,
       "end": 2335166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2335188,
       "end": 2335374,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "list",
       "start": 2335412,
       "end": 2335614,
       "confidence": 0.99997,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2335652,
       "end": 2335806,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cars",
       "start": 2335828,
       "end": 2336154,
       "confidence": 0.98,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2336202,
       "end": 2336462,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2336516,
       "end": 2336782,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2336836,
       "end": 2337006,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "try",
       "start": 2337028,
       "end": 2337178,
       "confidence": 0.91,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2337204,
       "end": 2337346,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2337368,
       "end": 2337554,
       "confidence": 0.99999,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 2337592,
       "end": 2337794,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sort",
       "start": 2337832,
       "end": 2338034,
       "confidence": 0.99996,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2338072,
       "end": 2338226,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fit,",
       "start": 2338248,
       "end": 2338482,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that's",
       "start": 2338536,
       "end": 2338766,
       "confidence": 0.95595,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "up",
       "start": 2338798,
       "end": 2338946,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2338968,
       "end": 2339154,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you.",
       "start": 2339192,
       "end": 2339538,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2339624,
       "end": 2339826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it's",
       "start": 2339848,
       "end": 2340126,
       "confidence": 0.82891,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "largely",
       "start": 2340158,
       "end": 2340526,
       "confidence": 0.99999,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "considered.",
       "start": 2340558,
       "end": 2341006,
       "confidence": 0.99965,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2341038,
       "end": 2341186,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 2341208,
       "end": 2341346,
       "confidence": 0.56,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "since",
       "start": 2341368,
       "end": 2341602,
       "confidence": 0.99868,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "learned",
       "start": 2341656,
       "end": 2341966,
       "confidence": 0.99814,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2341998,
       "end": 2342146,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2342168,
       "end": 2342354,
       "confidence": 1.0,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 2342392,
       "end": 2342498,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2342504,
       "end": 2342626,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 2342648,
       "end": 2342834,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2342872,
       "end": 2343460,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "now,",
       "start": 2343990,
       "end": 2344834,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a,",
       "start": 2345032,
       "end": 2345060,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2345060,
       "end": 2345280,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "waste",
       "start": 2345368,
       "end": 2345646,
       "confidence": 0.91363,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2345678,
       "end": 2345826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "everybody's",
       "start": 2345848,
       "end": 2346286,
       "confidence": 0.99042,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 2346318,
       "end": 2346514,
       "confidence": 0.99994,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2346552,
       "end": 2346754,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "waste",
       "start": 2346792,
       "end": 2347086,
       "confidence": 0.99989,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 2347118,
       "end": 2347266,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "time",
       "start": 2347288,
       "end": 2347474,
       "confidence": 0.99986,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "trying",
       "start": 2347512,
       "end": 2347666,
       "confidence": 0.99997,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2347688,
       "end": 2347778,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fit",
       "start": 2347784,
       "end": 2347966,
       "confidence": 0.9946,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2348008,
       "end": 2348214,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2348252,
       "end": 2348454,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "job.",
       "start": 2348492,
       "end": 2348742,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2348796,
       "end": 2348966,
       "confidence": 0.78,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2348988,
       "end": 2349078,
       "confidence": 0.74,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "person,",
       "start": 2349084,
       "end": 2349542,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if,",
       "start": 2349676,
       "end": 2350040,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2350040,
       "end": 2350780,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2350780,
       "end": 2350966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "says",
       "start": 2350988,
       "end": 2351270,
       "confidence": 0.99,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "definitely",
       "start": 2351340,
       "end": 2351718,
       "confidence": 0.99992,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "no",
       "start": 2351804,
       "end": 2352054,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "colored",
       "start": 2352092,
       "end": 2352466,
       "confidence": 0.99918,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2352498,
       "end": 2352694,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 2352732,
       "end": 2352886,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something,",
       "start": 2352908,
       "end": 2353094,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'd",
       "start": 2353132,
       "end": 2353330,
       "confidence": 0.32641,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 2353330,
       "end": 2353446,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2353468,
       "end": 2353558,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "little",
       "start": 2353564,
       "end": 2353734,
       "confidence": 0.99999,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "careful.",
       "start": 2353772,
       "end": 2354530,
       "confidence": 0.99935,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Or,",
       "start": 2354690,
       "end": 2355040,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2355040,
       "end": 2355340,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "definitely",
       "start": 2356090,
       "end": 2356646,
       "confidence": 0.99973,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "college",
       "start": 2356748,
       "end": 2357158,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "education,",
       "start": 2357244,
       "end": 2357782,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "where",
       "start": 2357916,
       "end": 2358166,
       "confidence": 0.48239,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 2358188,
       "end": 2358422,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2358476,
       "end": 2358694,
       "confidence": 0.99934,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "goes",
       "start": 2358732,
       "end": 2358934,
       "confidence": 0.99994,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2358972,
       "end": 2359126,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2359148,
       "end": 2359250,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "certain",
       "start": 2359260,
       "end": 2359482,
       "confidence": 0.99061,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "bunch.",
       "start": 2359536,
       "end": 2359942,
       "confidence": 0.37292,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2360006,
       "end": 2360186,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 2360208,
       "end": 2360394,
       "confidence": 0.55,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 2360432,
       "end": 2360586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that,",
       "start": 2360608,
       "end": 2361180,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2361520,
       "end": 2362760,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there's",
       "start": 2362760,
       "end": 2363046,
       "confidence": 0.99629,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "no",
       "start": 2363078,
       "end": 2363274,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "effort.",
       "start": 2363312,
       "end": 2363926,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2364038,
       "end": 2364314,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2364352,
       "end": 2364554,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "send",
       "start": 2364592,
       "end": 2364842,
       "confidence": 0.64786,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2364896,
       "end": 2365162,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2365216,
       "end": 2365434,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "places",
       "start": 2365472,
       "end": 2365942,
       "confidence": 0.96,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "that,",
       "start": 2366006,
       "end": 2366280,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 2366280,
       "end": 2367540,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2367540,
       "end": 2367834,
       "confidence": 0.99984,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "obviously",
       "start": 2367872,
       "end": 2368314,
       "confidence": 0.9998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "know.",
       "start": 2368432,
       "end": 2369100,
       "confidence": 0.99968,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 2369900,
       "end": 2373060,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2373060,
       "end": 2373274,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 2373312,
       "end": 2373430,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tell",
       "start": 2373440,
       "end": 2373614,
       "confidence": 0.99999,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "when",
       "start": 2373652,
       "end": 2373806,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2373828,
       "end": 2373966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2373988,
       "end": 2374174,
       "confidence": 0.51955,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 2374212,
       "end": 2374606,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2374708,
       "end": 2375022,
       "confidence": 0.69,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 2375076,
       "end": 2375294,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2375332,
       "end": 2375582,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "did",
       "start": 2375636,
       "end": 2375854,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2375892,
       "end": 2376094,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2376132,
       "end": 2376382,
       "confidence": 0.99999,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2376436,
       "end": 2376654,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "employment",
       "start": 2376692,
       "end": 2377194,
       "confidence": 0.9999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "agency",
       "start": 2377242,
       "end": 2377770,
       "confidence": 0.99808,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "had",
       "start": 2377850,
       "end": 2378094,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2378132,
       "end": 2378478,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "name",
       "start": 2378564,
       "end": 2378910,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 2378980,
       "end": 2379166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all.",
       "start": 2379188,
       "end": 2379614,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2379732,
       "end": 2380014,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2380052,
       "end": 2380206,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2380228,
       "end": 2380414,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "taking",
       "start": 2380452,
       "end": 2380750,
       "confidence": 0.99999,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "applications,",
       "start": 2380820,
       "end": 2381594,
       "confidence": 0.79795,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2381642,
       "end": 2381806,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2381828,
       "end": 2382014,
       "confidence": 0.92524,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "will",
       "start": 2382052,
       "end": 2382302,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "list",
       "start": 2382356,
       "end": 2382622,
       "confidence": 0.99995,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "you.",
       "start": 2382676,
       "end": 2383280,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They'll",
       "start": 2383730,
       "end": 2384186,
       "confidence": 0.99886,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "take",
       "start": 2384218,
       "end": 2384378,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "your",
       "start": 2384404,
       "end": 2384594,
       "confidence": 0.69,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "application,",
       "start": 2384632,
       "end": 2385026,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2385128,
       "end": 2385394,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "maybe",
       "start": 2385432,
       "end": 2385682,
       "confidence": 0.99992,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "they'll",
       "start": 2385736,
       "end": 2385966,
       "confidence": 0.99916,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "talk",
       "start": 2385998,
       "end": 2386194,
       "confidence": 0.99997,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2386232,
       "end": 2386434,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you.",
       "start": 2386472,
       "end": 2387058,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2387224,
       "end": 2387940,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they,",
       "start": 2388470,
       "end": 2388580,
       "confidence": 0.9996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2388580,
       "end": 2388620,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "comb",
       "start": 2388872,
       "end": 2389198,
       "confidence": 0.91297,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2389214,
       "end": 2389346,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ads.",
       "start": 2389368,
       "end": 2389678,
       "confidence": 0.68804,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2389694,
       "end": 2389826,
       "confidence": 0.99973,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 2389848,
       "end": 2389986,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "everything,",
       "start": 2390008,
       "end": 2390290,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2390360,
       "end": 2390498,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2390504,
       "end": 2390626,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "send",
       "start": 2390648,
       "end": 2390834,
       "confidence": 0.99997,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2390872,
       "end": 2391026,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "places.",
       "start": 2391048,
       "end": 2391326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "You're",
       "start": 2391358,
       "end": 2391646,
       "confidence": 0.99637,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "actually",
       "start": 2391678,
       "end": 2391970,
       "confidence": 0.99991,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "unwelcome.",
       "start": 2392040,
       "end": 2392100,
       "confidence": 0.64004,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Um,",
       "start": 2392100,
       "end": 2392240,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and,",
       "start": 2394710,
       "end": 2395200,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2395200,
       "end": 2395700,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 2395700,
       "end": 2396034,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 2396072,
       "end": 2396322,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2396376,
       "end": 2396594,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know,",
       "start": 2396632,
       "end": 2397100,
       "confidence": 0.99977,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 2397100,
       "end": 2397400,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "through",
       "start": 2397400,
       "end": 2397666,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2397688,
       "end": 2397826,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "grapevine",
       "start": 2397848,
       "end": 2398590,
       "confidence": 0.98614,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 2398670,
       "end": 2398914,
       "confidence": 0.99973,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 2398952,
       "end": 2399202,
       "confidence": 0.98,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2399256,
       "end": 2399474,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2399512,
       "end": 2399726,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "place",
       "start": 2399768,
       "end": 2400070,
       "confidence": 0.99999,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2400140,
       "end": 2400422,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "taking",
       "start": 2400476,
       "end": 2400790,
       "confidence": 0.99995,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "application,",
       "start": 2400860,
       "end": 2401480,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2402410,
       "end": 2402774,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 2402812,
       "end": 2402966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2402988,
       "end": 2403126,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 2403148,
       "end": 2403286,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2403308,
       "end": 2403446,
       "confidence": 0.99999,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "100",
       "start": 2403468,
       "end": 2403862,
       "confidence": 0.97,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2403916,
       "end": 2404134,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2404172,
       "end": 2404326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2404348,
       "end": 2404534,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2404572,
       "end": 2404774,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2404812,
       "end": 2404966,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 2404988,
       "end": 2405174,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2405212,
       "end": 2405366,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "names",
       "start": 2405388,
       "end": 2405714,
       "confidence": 0.9717,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2405762,
       "end": 2405974,
       "confidence": 0.81,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 2406012,
       "end": 2406262,
       "confidence": 0.56,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "asking",
       "start": 2406316,
       "end": 2406582,
       "confidence": 0.99992,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2406636,
       "end": 2406854,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "jobs,",
       "start": 2406892,
       "end": 2407186,
       "confidence": 0.99914,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they're",
       "start": 2407218,
       "end": 2407458,
       "confidence": 0.96605,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 2407474,
       "end": 2407558,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2407564,
       "end": 2407686,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 2407708,
       "end": 2407894,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 2407932,
       "end": 2408134,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "money.",
       "start": 2408172,
       "end": 2408614,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That's",
       "start": 2408732,
       "end": 2409106,
       "confidence": 0.9978,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 2409138,
       "end": 2409286,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2409308,
       "end": 2409446,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 2409468,
       "end": 2409606,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2409628,
       "end": 2409766,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "works.",
       "start": 2409788,
       "end": 2410070,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "More",
       "start": 2410140,
       "end": 2410326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2410348,
       "end": 2410486,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 2410508,
       "end": 2410598,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2410604,
       "end": 2410726,
       "confidence": 0.99946,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 2410748,
       "end": 2410838,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2410844,
       "end": 2410966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2410988,
       "end": 2411186,
       "confidence": 0.99999,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "jobs.",
       "start": 2411228,
       "end": 2412010,
       "confidence": 0.59618,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Well,",
       "start": 2412990,
       "end": 2413740,
       "confidence": 0.98453,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2413740,
       "end": 2414160,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2414160,
       "end": 2414394,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "description",
       "start": 2414432,
       "end": 2414806,
       "confidence": 0.99942,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2414838,
       "end": 2414986,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2415008,
       "end": 2415194,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2415232,
       "end": 2415386,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "just",
       "start": 2415408,
       "end": 2415546,
       "confidence": 0.99968,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2415568,
       "end": 2415706,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "show",
       "start": 2415728,
       "end": 2415866,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2415888,
       "end": 2416026,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2416048,
       "end": 2416186,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2416208,
       "end": 2416394,
       "confidence": 0.62243,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want",
       "start": 2416432,
       "end": 2416634,
       "confidence": 0.99997,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 2416672,
       "end": 2416874,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2416912,
       "end": 2417018,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2417024,
       "end": 2417194,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "terms",
       "start": 2417232,
       "end": 2417530,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "are,",
       "start": 2417600,
       "end": 2417880,
       "confidence": 0.95374,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2417880,
       "end": 2418200,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 2418200,
       "end": 2418474,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2418512,
       "end": 2418714,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "describe",
       "start": 2418752,
       "end": 2419094,
       "confidence": 0.99999,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2419142,
       "end": 2419306,
       "confidence": 0.99723,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2419328,
       "end": 2419466,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "real",
       "start": 2419488,
       "end": 2419674,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "go",
       "start": 2419712,
       "end": 2419914,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "getter,",
       "start": 2419952,
       "end": 2420614,
       "confidence": 0.99877,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2420742,
       "end": 2420986,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "real",
       "start": 2421008,
       "end": 2421290,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "brassy,",
       "start": 2421360,
       "end": 2421894,
       "confidence": 0.89539,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "push",
       "start": 2421942,
       "end": 2422166,
       "confidence": 0.99997,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "them,",
       "start": 2422198,
       "end": 2422394,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "shove",
       "start": 2422432,
       "end": 2422646,
       "confidence": 0.89316,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 2422678,
       "end": 2422826,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "around",
       "start": 2422848,
       "end": 2423178,
       "confidence": 0.99935,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "person.",
       "start": 2423264,
       "end": 2423900,
       "confidence": 0.51175,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2424510,
       "end": 2424874,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tried",
       "start": 2424912,
       "end": 2425162,
       "confidence": 0.98126,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 2425216,
       "end": 2425482,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "least",
       "start": 2425536,
       "end": 2425706,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "ten",
       "start": 2425728,
       "end": 2425962,
       "confidence": 0.64,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "different",
       "start": 2426016,
       "end": 2426282,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "places",
       "start": 2426336,
       "end": 2426694,
       "confidence": 0.99,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2426742,
       "end": 2426858,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2426864,
       "end": 2427034,
       "confidence": 0.98057,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2427072,
       "end": 2427274,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 2427312,
       "end": 2427526,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "job,",
       "start": 2427568,
       "end": 2427822,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2427876,
       "end": 2428046,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2428068,
       "end": 2428206,
       "confidence": 0.99982,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "take",
       "start": 2428228,
       "end": 2428414,
       "confidence": 0.9999,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 2428452,
       "end": 2428606,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "look",
       "start": 2428628,
       "end": 2428814,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 2428852,
       "end": 2428958,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2428964,
       "end": 2429086,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2429108,
       "end": 2429246,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "won't",
       "start": 2429268,
       "end": 2429418,
       "confidence": 0.99889,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 2429434,
       "end": 2429566,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anything",
       "start": 2429588,
       "end": 2429822,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2429876,
       "end": 2429998,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 2430004,
       "end": 2430126,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 2430148,
       "end": 2430286,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 2430308,
       "end": 2430494,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2430532,
       "end": 2430686,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 2430708,
       "end": 2430894,
       "confidence": 0.99973,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2430932,
       "end": 2431134,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2431172,
       "end": 2431326,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2431348,
       "end": 2431534,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "dumb.",
       "start": 2431572,
       "end": 2431914,
       "confidence": 0.97618,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2431962,
       "end": 2432126,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2432148,
       "end": 2432286,
       "confidence": 0.61129,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2432308,
       "end": 2432446,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 2432468,
       "end": 2432702,
       "confidence": 0.99993,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2432756,
       "end": 2432926,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2432948,
       "end": 2433038,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2433044,
       "end": 2433226,
       "confidence": 0.99979,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like.",
       "start": 2433258,
       "end": 2433742,
       "confidence": 0.55,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2433876,
       "end": 2434174,
       "confidence": 0.53,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2434212,
       "end": 2434318,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 2434324,
       "end": 2434494,
       "confidence": 0.62456,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 2434532,
       "end": 2434698,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "very",
       "start": 2434724,
       "end": 2434962,
       "confidence": 0.631,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wrong",
       "start": 2435016,
       "end": 2435330,
       "confidence": 0.99881,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2435400,
       "end": 2435586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2435608,
       "end": 2435746,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2435768,
       "end": 2435906,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 2435928,
       "end": 2436114,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2436152,
       "end": 2436306,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2436328,
       "end": 2436466,
       "confidence": 0.9997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2436488,
       "end": 2436626,
       "confidence": 0.99678,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "dumb.",
       "start": 2436648,
       "end": 2437262,
       "confidence": 0.57805,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They're",
       "start": 2437406,
       "end": 2437726,
       "confidence": 0.58776,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2437758,
       "end": 2437954,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 2437992,
       "end": 2438146,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 2438168,
       "end": 2438354,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "dumb.",
       "start": 2438392,
       "end": 2439090,
       "confidence": 0.55663,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 2457370,
       "end": 2457686,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "they",
       "start": 2457708,
       "end": 2457846,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "size",
       "start": 2457868,
       "end": 2458150,
       "confidence": 0.91603,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 2458220,
       "end": 2458454,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "up",
       "start": 2458492,
       "end": 2458742,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "rightly",
       "start": 2458796,
       "end": 2459570,
       "confidence": 0.65216,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "when",
       "start": 2459730,
       "end": 2460018,
       "confidence": 0.99893,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "they",
       "start": 2460044,
       "end": 2460234,
       "confidence": 0.91185,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "know",
       "start": 2460272,
       "end": 2460474,
       "confidence": 0.99995,
       "score": 42
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 2460512,
       "end": 2460714,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 2460752,
       "end": 2460906,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "are",
       "start": 2460928,
       "end": 2461066,
       "confidence": 0.99986,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "not",
       "start": 2461088,
       "end": 2461274,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 2461312,
       "end": 2461514,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "brassy,",
       "start": 2461552,
       "end": 2462102,
       "confidence": 0.91311,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "sharp,",
       "start": 2462166,
       "end": 2462240,
       "confidence": 0.37438,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "uh,",
       "start": 2462240,
       "end": 2463380,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "pushing",
       "start": 2463380,
       "end": 2464038,
       "confidence": 0.72076,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "sort",
       "start": 2464134,
       "end": 2464394,
       "confidence": 0.92943,
       "score": 12
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 2464432,
       "end": 2464634,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "person.",
       "start": 2464672,
       "end": 2465260,
       "confidence": 0.99931,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That's",
       "start": 2466350,
       "end": 2466758,
       "confidence": 0.6486,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2466774,
       "end": 2466906,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 2466928,
       "end": 2467500,
       "confidence": 1.0,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "maybe",
       "start": 2468110,
       "end": 2468240,
       "confidence": 0.99799,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "m",
       "start": 2468240,
       "end": 2468520,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 2468960,
       "end": 2469274,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "aren't",
       "start": 2469312,
       "end": 2469526,
       "confidence": 0.99963,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "accurate",
       "start": 2469558,
       "end": 2469846,
       "confidence": 0.99989,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "adjectives,",
       "start": 2469878,
       "end": 2470470,
       "confidence": 0.13226,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 2470550,
       "end": 2470746,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 2470768,
       "end": 2470858,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "least",
       "start": 2470864,
       "end": 2471034,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2471072,
       "end": 2471238,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2471254,
       "end": 2471386,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2471408,
       "end": 2471546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sort",
       "start": 2471568,
       "end": 2471706,
       "confidence": 0.99999,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2471728,
       "end": 2471866,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "person",
       "start": 2471888,
       "end": 2472134,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2472192,
       "end": 2472366,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 2472388,
       "end": 2472574,
       "confidence": 0.99996,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 2472612,
       "end": 2472814,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "money,",
       "start": 2472852,
       "end": 2473102,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 2473156,
       "end": 2473760,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2475650,
       "end": 2475966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2475988,
       "end": 2476174,
       "confidence": 0.99993,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "30%",
       "start": 2476212,
       "end": 2476830,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2476900,
       "end": 2477134,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2477172,
       "end": 2477422,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "company's",
       "start": 2477476,
       "end": 2478074,
       "confidence": 0.61191,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cut.",
       "start": 2478122,
       "end": 2478430,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "My",
       "start": 2478500,
       "end": 2478734,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "manager",
       "start": 2478772,
       "end": 2479322,
       "confidence": 0.98,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "gets",
       "start": 2479386,
       "end": 2479710,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "5%",
       "start": 2479780,
       "end": 2480430,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2480500,
       "end": 2480686,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 2480708,
       "end": 2480894,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2480932,
       "end": 2481086,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 2481108,
       "end": 2481342,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "groups,",
       "start": 2481396,
       "end": 2482122,
       "confidence": 0.99374,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mine",
       "start": 2482266,
       "end": 2482666,
       "confidence": 0.99916,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2482698,
       "end": 2482846,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "yours",
       "start": 2482868,
       "end": 2483194,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2483242,
       "end": 2483358,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "his,",
       "start": 2483364,
       "end": 2483582,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2483636,
       "end": 2483806,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 2483828,
       "end": 2484398,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "manager",
       "start": 2484564,
       "end": 2485114,
       "confidence": 0.8,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "gets",
       "start": 2485162,
       "end": 2485422,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "2%.",
       "start": 2485476,
       "end": 2485982,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Of",
       "start": 2486036,
       "end": 2486254,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "these,",
       "start": 2486292,
       "end": 2486638,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2486724,
       "end": 2486974,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 2487012,
       "end": 2487166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2487188,
       "end": 2487326,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 2487348,
       "end": 2487726,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It",
       "start": 2487828,
       "end": 2488106,
       "confidence": 0.47,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "all",
       "start": 2488148,
       "end": 2488354,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "works",
       "start": 2488392,
       "end": 2488594,
       "confidence": 0.99992,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2488632,
       "end": 2488834,
       "confidence": 0.54,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "that.",
       "start": 2488872,
       "end": 2489026,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "So",
       "start": 2489048,
       "end": 2489234,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2489272,
       "end": 2489474,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lose",
       "start": 2489512,
       "end": 2489726,
       "confidence": 0.9999,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "money",
       "start": 2489758,
       "end": 2490002,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 2490056,
       "end": 2490226,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2490248,
       "end": 2490386,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "hire",
       "start": 2490408,
       "end": 2490654,
       "confidence": 0.96631,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2490702,
       "end": 2491106,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 2491208,
       "end": 2491522,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2491576,
       "end": 2491806,
       "confidence": 0.991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2491838,
       "end": 2491986,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 2492008,
       "end": 2492098,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2492104,
       "end": 2492178,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 2492184,
       "end": 2492354,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2492392,
       "end": 2492498,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "living.",
       "start": 2492504,
       "end": 2493154,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2493352,
       "end": 2493714,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2493752,
       "end": 2493954,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2493992,
       "end": 2494242,
       "confidence": 0.92412,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 2494296,
       "end": 2494418,
       "confidence": 1.0,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2494424,
       "end": 2494546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cut",
       "start": 2494568,
       "end": 2494754,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "down",
       "start": 2494792,
       "end": 2494946,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 2494968,
       "end": 2495106,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2495128,
       "end": 2495314,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "income.",
       "start": 2495352,
       "end": 2496050,
       "confidence": 0.767,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Again,",
       "start": 2514350,
       "end": 2514810,
       "confidence": 0.9766,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 2514880,
       "end": 2515066,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "is",
       "start": 2515088,
       "end": 2515274,
       "confidence": 0.59,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 2515312,
       "end": 2515610,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 2515680,
       "end": 2515866,
       "confidence": 0.99995,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 2515888,
       "end": 2516026,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "guy",
       "start": 2516048,
       "end": 2516282,
       "confidence": 0.99999,
       "score": 8
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 2516336,
       "end": 2516554,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "are.",
       "start": 2516592,
       "end": 2516986,
       "confidence": 0.99834,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2517088,
       "end": 2517354,
       "confidence": 0.99923,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see,",
       "start": 2517392,
       "end": 2517700,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh.",
       "start": 2517700,
       "end": 2517860,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 2517888,
       "end": 2518106,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 2518128,
       "end": 2518314,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "know",
       "start": 2518352,
       "end": 2518506,
       "confidence": 0.99999,
       "score": 42
     },
     {
       "speaker": "B",
       "text": "it.",
       "start": 2518528,
       "end": 2519050,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Well,",
       "start": 2519200,
       "end": 2519466,
       "confidence": 0.9996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2519488,
       "end": 2519626,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2519648,
       "end": 2520074,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2520192,
       "end": 2520426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2520448,
       "end": 2520634,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 2520672,
       "end": 2520874,
       "confidence": 0.9999,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "evidence",
       "start": 2520912,
       "end": 2521382,
       "confidence": 0.64979,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 2521446,
       "end": 2521818,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2521904,
       "end": 2522154,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think,",
       "start": 2522192,
       "end": 2522400,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 2522400,
       "end": 2522820,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "In",
       "start": 2522880,
       "end": 2523146,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2523168,
       "end": 2523306,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sense,",
       "start": 2523328,
       "end": 2523526,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2523568,
       "end": 2523678,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "admire",
       "start": 2523684,
       "end": 2524074,
       "confidence": 0.68575,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 2524122,
       "end": 2524334,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2524372,
       "end": 2524574,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2524612,
       "end": 2524766,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2524788,
       "end": 2524926,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "snap",
       "start": 2524948,
       "end": 2525274,
       "confidence": 0.84193,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "judgment.",
       "start": 2525322,
       "end": 2525946,
       "confidence": 0.56987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "In",
       "start": 2526058,
       "end": 2526334,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "these",
       "start": 2526372,
       "end": 2526574,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cases,",
       "start": 2526612,
       "end": 2527082,
       "confidence": 0.98825,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "though,",
       "start": 2527146,
       "end": 2527374,
       "confidence": 0.77463,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2527412,
       "end": 2527566,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2527588,
       "end": 2527726,
       "confidence": 0.96108,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2527748,
       "end": 2527982,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 2528036,
       "end": 2528640,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2529170,
       "end": 2529620,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 2529620,
       "end": 2530960,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Uh.",
       "start": 2531360,
       "end": 2531640,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2531640,
       "end": 2531806,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "tend",
       "start": 2531828,
       "end": 2532058,
       "confidence": 0.95529,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2532074,
       "end": 2532158,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 2532164,
       "end": 2532286,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 2532308,
       "end": 2532446,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "affinity",
       "start": 2532468,
       "end": 2532874,
       "confidence": 0.99999,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2532922,
       "end": 2533086,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2533108,
       "end": 2533198,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 2533204,
       "end": 2533374,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sort",
       "start": 2533412,
       "end": 2533614,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2533652,
       "end": 2533806,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "job",
       "start": 2533828,
       "end": 2534014,
       "confidence": 0.99998,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2534052,
       "end": 2534206,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2534228,
       "end": 2534414,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2534452,
       "end": 2534702,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "too.",
       "start": 2534756,
       "end": 2535406,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2535588,
       "end": 2535934,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want",
       "start": 2535972,
       "end": 2536126,
       "confidence": 0.9996,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2536148,
       "end": 2536286,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "place",
       "start": 2536308,
       "end": 2536506,
       "confidence": 0.69897,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "salesmen,",
       "start": 2536548,
       "end": 2537214,
       "confidence": 0.98722,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "particularly",
       "start": 2537262,
       "end": 2537822,
       "confidence": 0.74313,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 2537886,
       "end": 2538066,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2538088,
       "end": 2538274,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "call",
       "start": 2538312,
       "end": 2538514,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "fast",
       "start": 2538552,
       "end": 2538898,
       "confidence": 0.52,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "closers.",
       "start": 2538984,
       "end": 2539566,
       "confidence": 0.92892,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "What",
       "start": 2539598,
       "end": 2539746,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2539768,
       "end": 2539954,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want",
       "start": 2539992,
       "end": 2540146,
       "confidence": 0.97318,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2540168,
       "end": 2540306,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2540328,
       "end": 2540562,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "selling",
       "start": 2540616,
       "end": 2541006,
       "confidence": 0.99686,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "deep",
       "start": 2541038,
       "end": 2541326,
       "confidence": 0.96034,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "freezers,",
       "start": 2541358,
       "end": 2542110,
       "confidence": 0.57896,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "aluminum",
       "start": 2542270,
       "end": 2542862,
       "confidence": 0.63183,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "storm",
       "start": 2542926,
       "end": 2543214,
       "confidence": 0.99413,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "windows,",
       "start": 2543262,
       "end": 2544050,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "plots",
       "start": 2544470,
       "end": 2544974,
       "confidence": 0.97067,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2545022,
       "end": 2545186,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "graveyards,",
       "start": 2545208,
       "end": 2546370,
       "confidence": 0.90256,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 2546460,
       "end": 2546860,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "used",
       "start": 2546860,
       "end": 2547318,
       "confidence": 0.4703,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "cars",
       "start": 2547404,
       "end": 2548066,
       "confidence": 0.99,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2548178,
       "end": 2548454,
       "confidence": 0.67,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2548492,
       "end": 2548694,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sort",
       "start": 2548732,
       "end": 2548934,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2548972,
       "end": 2549078,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "thing.",
       "start": 2549084,
       "end": 2549302,
       "confidence": 0.99902,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "That's",
       "start": 2549356,
       "end": 2549586,
       "confidence": 0.83756,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2549618,
       "end": 2549766,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 2549788,
       "end": 2549926,
       "confidence": 1.0,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2549948,
       "end": 2550086,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "jobs",
       "start": 2550108,
       "end": 2550386,
       "confidence": 0.96954,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2550418,
       "end": 2550614,
       "confidence": 0.99983,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want.",
       "start": 2550652,
       "end": 2551334,
       "confidence": 0.91352,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2551532,
       "end": 2552080,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 2552080,
       "end": 2552540,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 2552540,
       "end": 2552774,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "jobs",
       "start": 2552812,
       "end": 2553186,
       "confidence": 0.99968,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2553218,
       "end": 2553462,
       "confidence": 0.98935,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "potentially",
       "start": 2553516,
       "end": 2554002,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 2554066,
       "end": 2554342,
       "confidence": 0.93045,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2554396,
       "end": 2554614,
       "confidence": 0.69,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2554652,
       "end": 2554854,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 2554892,
       "end": 2555094,
       "confidence": 1.0,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2555132,
       "end": 2555286,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "person.",
       "start": 2555308,
       "end": 2555880,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2557770,
       "end": 2558134,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2558172,
       "end": 2558422,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wouldn't",
       "start": 2558476,
       "end": 2558802,
       "confidence": 0.65024,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want",
       "start": 2558866,
       "end": 2559094,
       "confidence": 0.99898,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2559132,
       "end": 2559286,
       "confidence": 0.7,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "place",
       "start": 2559308,
       "end": 2559494,
       "confidence": 0.99959,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2559532,
       "end": 2559734,
       "confidence": 0.61,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anybody",
       "start": 2559772,
       "end": 2560070,
       "confidence": 0.99363,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2560140,
       "end": 2560326,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2560348,
       "end": 2560438,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sociology",
       "start": 2560444,
       "end": 2561058,
       "confidence": 0.97618,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "professor",
       "start": 2561154,
       "end": 2561714,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 2561762,
       "end": 2561890,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anything",
       "start": 2561900,
       "end": 2562170,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2562240,
       "end": 2562522,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "that.",
       "start": 2562576,
       "end": 2563274,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Or",
       "start": 2563472,
       "end": 2563882,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2563936,
       "end": 2564540,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "clerk",
       "start": 2565070,
       "end": 2565606,
       "confidence": 0.99373,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 2565638,
       "end": 2565786,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2565808,
       "end": 2565946,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "administration",
       "start": 2565968,
       "end": 2566582,
       "confidence": 0.99904,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "building",
       "start": 2566646,
       "end": 2567018,
       "confidence": 0.99987,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "over",
       "start": 2567104,
       "end": 2567354,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "here",
       "start": 2567392,
       "end": 2567594,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 2567632,
       "end": 2567834,
       "confidence": 0.62,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something",
       "start": 2567872,
       "end": 2568122,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2568176,
       "end": 2568394,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "that.",
       "start": 2568432,
       "end": 2568634,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2568672,
       "end": 2568874,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2568912,
       "end": 2569174,
       "confidence": 0.99338,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 2569222,
       "end": 2569482,
       "confidence": 0.95791,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 2569536,
       "end": 2569754,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 2569792,
       "end": 2569946,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "feeling",
       "start": 2569968,
       "end": 2570326,
       "confidence": 0.75439,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2570358,
       "end": 2570506,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 2570528,
       "end": 2570714,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 2570752,
       "end": 2570906,
       "confidence": 0.99999,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2570928,
       "end": 2571066,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "jobs",
       "start": 2571088,
       "end": 2571366,
       "confidence": 0.99991,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2571398,
       "end": 2571498,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "wish",
       "start": 2571504,
       "end": 2571686,
       "confidence": 0.94871,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2571718,
       "end": 2571866,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "didn't",
       "start": 2571888,
       "end": 2572038,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "come",
       "start": 2572054,
       "end": 2572186,
       "confidence": 0.99574,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "in,",
       "start": 2572208,
       "end": 2572394,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2572432,
       "end": 2572586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think.",
       "start": 2572608,
       "end": 2572794,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Except",
       "start": 2572832,
       "end": 2573126,
       "confidence": 0.99795,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2573158,
       "end": 2573306,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2573328,
       "end": 2573418,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 2573424,
       "end": 2573546,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2573568,
       "end": 2573658,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "little",
       "start": 2573664,
       "end": 2573834,
       "confidence": 0.93438,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "money.",
       "start": 2573872,
       "end": 2574460,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2576370,
       "end": 2576734,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 2576772,
       "end": 2576974,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2577012,
       "end": 2577310,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2577380,
       "end": 2577566,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2577588,
       "end": 2577726,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "whole",
       "start": 2577748,
       "end": 2577934,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2577972,
       "end": 2578222,
       "confidence": 0.99988,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pretty",
       "start": 2578276,
       "end": 2578542,
       "confidence": 0.99976,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "intelligent",
       "start": 2578596,
       "end": 2579550,
       "confidence": 0.99928,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2579970,
       "end": 2580334,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they're",
       "start": 2580372,
       "end": 2580618,
       "confidence": 0.93985,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pretty",
       "start": 2580634,
       "end": 2580814,
       "confidence": 0.51955,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "good",
       "start": 2580852,
       "end": 2581006,
       "confidence": 1.0,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 2581028,
       "end": 2581166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2581188,
       "end": 2581326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "snap",
       "start": 2581348,
       "end": 2581626,
       "confidence": 0.73179,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "judgment.",
       "start": 2581658,
       "end": 2582074,
       "confidence": 0.98732,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Particularly,",
       "start": 2582122,
       "end": 2582714,
       "confidence": 0.64956,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2582762,
       "end": 2582926,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 2582948,
       "end": 2583086,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "see",
       "start": 2583108,
       "end": 2583246,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "whether",
       "start": 2583268,
       "end": 2583454,
       "confidence": 0.99999,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2583492,
       "end": 2583694,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2583732,
       "end": 2583934,
       "confidence": 0.99878,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 2583972,
       "end": 2584126,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2584148,
       "end": 2584346,
       "confidence": 0.99874,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2584388,
       "end": 2584594,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2584632,
       "end": 2584834,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type.",
       "start": 2584872,
       "end": 2585458,
       "confidence": 0.96954,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2585624,
       "end": 2585954,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that's",
       "start": 2585992,
       "end": 2586206,
       "confidence": 0.99955,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2586238,
       "end": 2586338,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 2586344,
       "end": 2586562,
       "confidence": 0.99997,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2586616,
       "end": 2586834,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want.",
       "start": 2586872,
       "end": 2587074,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "The",
       "start": 2587112,
       "end": 2587266,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 2587288,
       "end": 2587474,
       "confidence": 0.99992,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2587512,
       "end": 2587666,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "make",
       "start": 2587688,
       "end": 2587874,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2587912,
       "end": 2588066,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "money",
       "start": 2588088,
       "end": 2588274,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 2588312,
       "end": 2588466,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2588488,
       "end": 2588626,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 2588648,
       "end": 2588882,
       "confidence": 0.99995,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2588936,
       "end": 2589154,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are.",
       "start": 2589192,
       "end": 2589780,
       "confidence": 0.99955,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2591350,
       "end": 2592080,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um.",
       "start": 2592080,
       "end": 2597920,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2597920,
       "end": 2598194,
       "confidence": 0.99756,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2598232,
       "end": 2598482,
       "confidence": 0.58501,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "universal",
       "start": 2598536,
       "end": 2599086,
       "confidence": 0.99997,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2599118,
       "end": 2599278,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2599304,
       "end": 2599494,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "agreement",
       "start": 2599532,
       "end": 2600050,
       "confidence": 0.79045,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2600130,
       "end": 2600326,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2600348,
       "end": 2600546,
       "confidence": 0.61058,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2600578,
       "end": 2600726,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2600748,
       "end": 2600934,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type.",
       "start": 2600972,
       "end": 2601560,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Also,",
       "start": 2602330,
       "end": 2602742,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "these",
       "start": 2602796,
       "end": 2603014,
       "confidence": 0.95368,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 2603052,
       "end": 2603302,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2603356,
       "end": 2603574,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2603612,
       "end": 2603766,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2603788,
       "end": 2603986,
       "confidence": 0.99937,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "talking",
       "start": 2604018,
       "end": 2604262,
       "confidence": 0.99998,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2604316,
       "end": 2604582,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "here.",
       "start": 2604636,
       "end": 2604950,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Would",
       "start": 2605020,
       "end": 2605254,
       "confidence": 0.90376,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "none",
       "start": 2605292,
       "end": 2605458,
       "confidence": 0.98699,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2605474,
       "end": 2605558,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them",
       "start": 2605564,
       "end": 2605686,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "hire",
       "start": 2605708,
       "end": 2605986,
       "confidence": 0.95384,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2606018,
       "end": 2606214,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 2606252,
       "end": 2606840,
       "confidence": 0.99809,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "instant",
       "start": 2607530,
       "end": 2608066,
       "confidence": 0.9977,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2608098,
       "end": 2608246,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 2608268,
       "end": 2608502,
       "confidence": 0.99981,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "walked",
       "start": 2608556,
       "end": 2608818,
       "confidence": 0.93192,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "through",
       "start": 2608834,
       "end": 2608966,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2608988,
       "end": 2609078,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "door,",
       "start": 2609084,
       "end": 2609278,
       "confidence": 0.53499,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2609314,
       "end": 2609466,
       "confidence": 0.97919,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "would",
       "start": 2609488,
       "end": 2609626,
       "confidence": 0.99637,
       "score": 26
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 2609648,
       "end": 2609738,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "nothing",
       "start": 2609744,
       "end": 2609914,
       "confidence": 0.99916,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2609952,
       "end": 2610058,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 2610064,
       "end": 2610186,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 2610208,
       "end": 2610346,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 2610368,
       "end": 2610940,
       "confidence": 0.71,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Driving",
       "start": 2634150,
       "end": 2634622,
       "confidence": 0.9913,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "yourself",
       "start": 2634686,
       "end": 2635300,
       "confidence": 0.99987,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "pretty",
       "start": 2635670,
       "end": 2636082,
       "confidence": 0.99989,
       "score": 9
     },
     {
       "speaker": "B",
       "text": "clearly",
       "start": 2636136,
       "end": 2636814,
       "confidence": 0.97849,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "the",
       "start": 2636942,
       "end": 2637186,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 2637208,
       "end": 2637346,
       "confidence": 0.99996,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 2637368,
       "end": 2637458,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "person",
       "start": 2637464,
       "end": 2637682,
       "confidence": 0.99999,
       "score": 19
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 2637736,
       "end": 2637954,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "know",
       "start": 2637992,
       "end": 2638194,
       "confidence": 0.99947,
       "score": 42
     },
     {
       "speaker": "B",
       "text": "yourself",
       "start": 2638232,
       "end": 2638530,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 2638600,
       "end": 2638786,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "be.",
       "start": 2638808,
       "end": 2638994,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 2639032,
       "end": 2639186,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "other",
       "start": 2639208,
       "end": 2639394,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "people",
       "start": 2639432,
       "end": 2640018,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "B",
       "text": "confirm",
       "start": 2640184,
       "end": 2640814,
       "confidence": 0.95,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "this,",
       "start": 2640862,
       "end": 2641506,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "but",
       "start": 2641688,
       "end": 2642178,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "these",
       "start": 2642264,
       "end": 2642562,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "people",
       "start": 2642616,
       "end": 2643220,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "B",
       "text": "wouldn't",
       "start": 2646230,
       "end": 2646734,
       "confidence": 0.99992,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "take",
       "start": 2646782,
       "end": 2647054,
       "confidence": 0.99999,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 2647112,
       "end": 2647334,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "brassy,",
       "start": 2647372,
       "end": 2648310,
       "confidence": 0.99603,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "hard,",
       "start": 2648810,
       "end": 2649222,
       "confidence": 0.9997,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "driving,",
       "start": 2649276,
       "end": 2649730,
       "confidence": 0.99908,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "fast,",
       "start": 2649810,
       "end": 2650150,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "closer",
       "start": 2650220,
       "end": 2650754,
       "confidence": 0.99737,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 2650802,
       "end": 2650966,
       "confidence": 0.99993,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 2650988,
       "end": 2651414,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "guy.",
       "start": 2651532,
       "end": 2652198,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "They're",
       "start": 2652364,
       "end": 2652754,
       "confidence": 0.93336,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "looking",
       "start": 2652802,
       "end": 2653062,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "for",
       "start": 2653116,
       "end": 2653382,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you.",
       "start": 2653436,
       "end": 2653942,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Is",
       "start": 2654076,
       "end": 2654326,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "that",
       "start": 2654348,
       "end": 2654486,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "what",
       "start": 2654508,
       "end": 2654598,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 2654604,
       "end": 2654738,
       "confidence": 0.9665,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "saying?",
       "start": 2654754,
       "end": 2654886,
       "confidence": 0.74296,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah.",
       "start": 2654908,
       "end": 2655480,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Like",
       "start": 2657130,
       "end": 2657494,
       "confidence": 0.93,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 2657532,
       "end": 2657734,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "there",
       "start": 2657772,
       "end": 2657926,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2657948,
       "end": 2658134,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something",
       "start": 2658172,
       "end": 2658374,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2658412,
       "end": 2658662,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you.",
       "start": 2658716,
       "end": 2658982,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "That",
       "start": 2659036,
       "end": 2659266,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "attracts",
       "start": 2659308,
       "end": 2660054,
       "confidence": 0.96168,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 2660182,
       "end": 2660474,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 2660512,
       "end": 2660714,
       "confidence": 0.99634,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 2660752,
       "end": 2661340,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "person.",
       "start": 2662270,
       "end": 2663020,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2663710,
       "end": 2664074,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then",
       "start": 2664112,
       "end": 2664700,
       "confidence": 0.92,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "here,",
       "start": 2666350,
       "end": 2666762,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2666816,
       "end": 2666938,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think,",
       "start": 2666944,
       "end": 2667066,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2667088,
       "end": 2667274,
       "confidence": 0.75,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2667312,
       "end": 2667418,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "little",
       "start": 2667424,
       "end": 2667546,
       "confidence": 1.0,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "bit",
       "start": 2667568,
       "end": 2667658,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2667664,
       "end": 2667786,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2667808,
       "end": 2667946,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "fall",
       "start": 2667968,
       "end": 2668154,
       "confidence": 0.6092,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2668192,
       "end": 2668346,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mine.",
       "start": 2668368,
       "end": 2668662,
       "confidence": 0.80056,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2668726,
       "end": 2668906,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2668928,
       "end": 2669126,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "talk",
       "start": 2669158,
       "end": 2669738,
       "confidence": 0.72486,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "well",
       "start": 2669904,
       "end": 2670234,
       "confidence": 0.99999,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "enough,",
       "start": 2670272,
       "end": 2670420,
       "confidence": 0.61503,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2670420,
       "end": 2670500,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2670896,
       "end": 2671194,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2671232,
       "end": 2671386,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2671408,
       "end": 2671546,
       "confidence": 0.79787,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 2671568,
       "end": 2671706,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "enough.",
       "start": 2671728,
       "end": 2671974,
       "confidence": 0.97871,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2672032,
       "end": 2672314,
       "confidence": 0.72809,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "too",
       "start": 2672362,
       "end": 2672574,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "insecure,",
       "start": 2672612,
       "end": 2673162,
       "confidence": 0.99956,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "let's",
       "start": 2673226,
       "end": 2673466,
       "confidence": 0.99984,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "put",
       "start": 2673498,
       "end": 2673598,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2673604,
       "end": 2673726,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2673748,
       "end": 2673934,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way.",
       "start": 2673972,
       "end": 2674560,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "So",
       "start": 2675010,
       "end": 2675518,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2675604,
       "end": 2675854,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2675892,
       "end": 2676094,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sense,",
       "start": 2676132,
       "end": 2676720,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "verbally,",
       "start": 2677170,
       "end": 2677978,
       "confidence": 0.9661,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2678074,
       "end": 2678334,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "misrepresent",
       "start": 2678372,
       "end": 2679322,
       "confidence": 0.86862,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "myself.",
       "start": 2679386,
       "end": 2680000,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2680930,
       "end": 2681294,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it's",
       "start": 2681332,
       "end": 2681546,
       "confidence": 0.96478,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2681578,
       "end": 2681774,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 2681812,
       "end": 2681966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "purpose.",
       "start": 2681988,
       "end": 2682314,
       "confidence": 0.56204,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It's",
       "start": 2682362,
       "end": 2682618,
       "confidence": 0.93042,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2682634,
       "end": 2682766,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "best",
       "start": 2682788,
       "end": 2682974,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2683012,
       "end": 2683166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 2683188,
       "end": 2683374,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do.",
       "start": 2683412,
       "end": 2683902,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Because",
       "start": 2684036,
       "end": 2684382,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2684436,
       "end": 2684606,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "go",
       "start": 2684628,
       "end": 2684766,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "out",
       "start": 2684788,
       "end": 2684926,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2684948,
       "end": 2685134,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "look",
       "start": 2685172,
       "end": 2685326,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2685348,
       "end": 2685546,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "jobs.",
       "start": 2685588,
       "end": 2686062,
       "confidence": 0.81757,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2686126,
       "end": 2686306,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2686328,
       "end": 2686514,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2686552,
       "end": 2686802,
       "confidence": 0.99998,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2686856,
       "end": 2687074,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2687112,
       "end": 2687362,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "prefer",
       "start": 2687416,
       "end": 2688130,
       "confidence": 0.99967,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "most",
       "start": 2688790,
       "end": 2689202,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "places,",
       "start": 2689256,
       "end": 2689822,
       "confidence": 0.66,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "somebody",
       "start": 2689886,
       "end": 2690162,
       "confidence": 0.99999,
       "score": 8
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 2690216,
       "end": 2690434,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 2690472,
       "end": 2690626,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2690648,
       "end": 2690834,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "call",
       "start": 2690872,
       "end": 2691122,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2691176,
       "end": 2691298,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "little",
       "start": 2691304,
       "end": 2691522,
       "confidence": 0.99014,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 2691576,
       "end": 2692130,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "brass,",
       "start": 2692280,
       "end": 2692910,
       "confidence": 0.64156,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2692990,
       "end": 2693138,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "little",
       "start": 2693144,
       "end": 2693314,
       "confidence": 1.0,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 2693352,
       "end": 2693602,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "push",
       "start": 2693656,
       "end": 2694446,
       "confidence": 0.99779,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "or",
       "start": 2694638,
       "end": 2694994,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "something",
       "start": 2695032,
       "end": 2695282,
       "confidence": 1.0,
       "score": 27
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 2695336,
       "end": 2695554,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2695592,
       "end": 2695746,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "can",
       "start": 2695768,
       "end": 2695906,
       "confidence": 0.99965,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "produce.",
       "start": 2695928,
       "end": 2696286,
       "confidence": 0.99921,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "So",
       "start": 2696318,
       "end": 2696514,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2696552,
       "end": 2696754,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "try",
       "start": 2696792,
       "end": 2696958,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2696984,
       "end": 2697126,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pretend",
       "start": 2697148,
       "end": 2697474,
       "confidence": 0.81287,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2697522,
       "end": 2697734,
       "confidence": 0.78,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2697772,
       "end": 2697878,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "little,",
       "start": 2697884,
       "end": 2698440,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "which",
       "start": 2699530,
       "end": 2699894,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "brings",
       "start": 2699932,
       "end": 2700226,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2700258,
       "end": 2700406,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2700428,
       "end": 2700518,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "little",
       "start": 2700524,
       "end": 2700694,
       "confidence": 0.99999,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 2700732,
       "end": 2700934,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "toward",
       "start": 2700972,
       "end": 2701266,
       "confidence": 0.99958,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2701298,
       "end": 2701494,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "point.",
       "start": 2701532,
       "end": 2701734,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2701772,
       "end": 2701926,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2701948,
       "end": 2702134,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "still",
       "start": 2702172,
       "end": 2702374,
       "confidence": 0.99994,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2702412,
       "end": 2702626,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want",
       "start": 2702658,
       "end": 2702854,
       "confidence": 0.99976,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "me.",
       "start": 2702892,
       "end": 2703480,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 2704010,
       "end": 2704760,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh.",
       "start": 2704980,
       "end": 2705720,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Actually,",
       "start": 2705720,
       "end": 2706102,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2706156,
       "end": 2706374,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "misrepresent",
       "start": 2706412,
       "end": 2707154,
       "confidence": 0.92428,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "myself",
       "start": 2707202,
       "end": 2707558,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2707644,
       "end": 2707846,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2707868,
       "end": 2708102,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way,",
       "start": 2708156,
       "end": 2708662,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2708796,
       "end": 2709094,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 2709132,
       "end": 2709394,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "brains",
       "start": 2709452,
       "end": 2710118,
       "confidence": 0.41778,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2710294,
       "end": 2710694,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "work",
       "start": 2710742,
       "end": 2711002,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2711056,
       "end": 2711274,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way.",
       "start": 2711312,
       "end": 2711900,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2713070,
       "end": 2713434,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "here's",
       "start": 2713472,
       "end": 2713766,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 2713798,
       "end": 2713994,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "happens.",
       "start": 2714032,
       "end": 2714330,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2714400,
       "end": 2714586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2714608,
       "end": 2714794,
       "confidence": 0.99999,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2714832,
       "end": 2714986,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "under",
       "start": 2715008,
       "end": 2715242,
       "confidence": 0.77985,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "these",
       "start": 2715296,
       "end": 2715562,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2715616,
       "end": 2716220,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2717870,
       "end": 2718378,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in.",
       "start": 2718464,
       "end": 2719100,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2720430,
       "end": 2720794,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2720832,
       "end": 2720986,
       "confidence": 0.82633,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "want",
       "start": 2721008,
       "end": 2721146,
       "confidence": 0.99204,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2721168,
       "end": 2721354,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 2721392,
       "end": 2721594,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "this,",
       "start": 2721632,
       "end": 2721930,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "but",
       "start": 2722000,
       "end": 2722234,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2722272,
       "end": 2722426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "many",
       "start": 2722448,
       "end": 2722682,
       "confidence": 0.99998,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "ways",
       "start": 2722736,
       "end": 2723098,
       "confidence": 1.0,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2723184,
       "end": 2723482,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do,",
       "start": 2723536,
       "end": 2724138,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "before",
       "start": 2724304,
       "end": 2724778,
       "confidence": 0.9987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "too",
       "start": 2724864,
       "end": 2725114,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "long,",
       "start": 2725152,
       "end": 2725354,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2725392,
       "end": 2725594,
       "confidence": 0.89018,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2725632,
       "end": 2725786,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "hell",
       "start": 2725808,
       "end": 2725946,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2725968,
       "end": 2726106,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2726128,
       "end": 2726218,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lot",
       "start": 2726224,
       "end": 2726346,
       "confidence": 1.0,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 2726368,
       "end": 2726602,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2726656,
       "end": 2726922,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2726976,
       "end": 2727146,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lot",
       "start": 2727168,
       "end": 2727306,
       "confidence": 1.0,
       "score": 14
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2727328,
       "end": 2727466,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "things",
       "start": 2727488,
       "end": 2728060,
       "confidence": 0.51175,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 2728990,
       "end": 2729354,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2729392,
       "end": 2729594,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do.",
       "start": 2729632,
       "end": 2730220,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2730910,
       "end": 2731322,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2731376,
       "end": 2731594,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "begin",
       "start": 2731632,
       "end": 2731930,
       "confidence": 0.63704,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2732000,
       "end": 2732234,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "suspect",
       "start": 2732272,
       "end": 2732662,
       "confidence": 0.97416,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2732726,
       "end": 2732906,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "after",
       "start": 2732928,
       "end": 2733114,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2733152,
       "end": 2733306,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "while.",
       "start": 2733328,
       "end": 2733514,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2733552,
       "end": 2733658,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "then,",
       "start": 2733664,
       "end": 2733820,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2733820,
       "end": 2733880,
       "confidence": 0.58,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2733880,
       "end": 2734086,
       "confidence": 0.92691,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 2734118,
       "end": 2734290,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "hot",
       "start": 2734320,
       "end": 2734514,
       "confidence": 0.56314,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "water.",
       "start": 2734552,
       "end": 2735140,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Get",
       "start": 2758170,
       "end": 2758534,
       "confidence": 0.99998,
       "score": 37
     },
     {
       "speaker": "B",
       "text": "into",
       "start": 2758572,
       "end": 2758774,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 2758812,
       "end": 2758966,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "position",
       "start": 2758988,
       "end": 2759318,
       "confidence": 0.99999,
       "score": 2
     },
     {
       "speaker": "B",
       "text": "where",
       "start": 2759404,
       "end": 2759666,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "you",
       "start": 2759708,
       "end": 2759962,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "feel",
       "start": 2760016,
       "end": 2760234,
       "confidence": 0.99999,
       "score": 20
     },
     {
       "speaker": "B",
       "text": "you're",
       "start": 2760272,
       "end": 2760518,
       "confidence": 0.59625,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "kind",
       "start": 2760534,
       "end": 2760666,
       "confidence": 0.99998,
       "score": 30
     },
     {
       "speaker": "B",
       "text": "of",
       "start": 2760688,
       "end": 2760826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "threatening",
       "start": 2760848,
       "end": 2761462,
       "confidence": 0.99901,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "to",
       "start": 2761526,
       "end": 2761754,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "them.",
       "start": 2761792,
       "end": 2762234,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah.",
       "start": 2762352,
       "end": 2762922,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 2763056,
       "end": 2763354,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "they",
       "start": 2763392,
       "end": 2763642,
       "confidence": 0.55441,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "perceive",
       "start": 2763696,
       "end": 2764134,
       "confidence": 0.88071,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "this.",
       "start": 2764182,
       "end": 2764780,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Ah.",
       "start": 2764980,
       "end": 2766940,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2766940,
       "end": 2767274,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2767312,
       "end": 2767466,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2767488,
       "end": 2767686,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2767718,
       "end": 2767914,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 2767952,
       "end": 2768346,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 2768448,
       "end": 2768762,
       "confidence": 0.89,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "this",
       "start": 2768816,
       "end": 2769034,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "is",
       "start": 2769072,
       "end": 2769274,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 2769312,
       "end": 2769466,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "source",
       "start": 2769488,
       "end": 2769766,
       "confidence": 0.97358,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "of.",
       "start": 2769798,
       "end": 2770186,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2770288,
       "end": 2770506,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2770528,
       "end": 2770726,
       "confidence": 0.99956,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2770758,
       "end": 2770954,
       "confidence": 0.99992,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 2770992,
       "end": 2771242,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2771296,
       "end": 2771514,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2771552,
       "end": 2771850,
       "confidence": 0.50777,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2771920,
       "end": 2772154,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "perceive",
       "start": 2772192,
       "end": 2772694,
       "confidence": 0.88042,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 2772742,
       "end": 2773110,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Let's",
       "start": 2773200,
       "end": 2773546,
       "confidence": 0.99926,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 2773578,
       "end": 2773774,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2773812,
       "end": 2774014,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "smell",
       "start": 2774052,
       "end": 2774346,
       "confidence": 0.99995,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2774378,
       "end": 2774960,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "somewhere.",
       "start": 2775730,
       "end": 2776282,
       "confidence": 0.47932,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "Here's",
       "start": 2776346,
       "end": 2776666,
       "confidence": 0.97006,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "a",
       "start": 2776698,
       "end": 2776798,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "guy",
       "start": 2776804,
       "end": 2777022,
       "confidence": 1.0,
       "score": 8
     },
     {
       "speaker": "B",
       "text": "who",
       "start": 2777076,
       "end": 2777774,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "knows",
       "start": 2777972,
       "end": 2778426,
       "confidence": 0.99984,
       "score": 4
     },
     {
       "speaker": "B",
       "text": "too",
       "start": 2778458,
       "end": 2778654,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "much.",
       "start": 2778692,
       "end": 2779280,
       "confidence": 0.99969,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "He's",
       "start": 2779650,
       "end": 2780510,
       "confidence": 0.84902,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "underneath",
       "start": 2782690,
       "end": 2783466,
       "confidence": 0.89186,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "me.",
       "start": 2783498,
       "end": 2783694,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2783732,
       "end": 2784366,
       "confidence": 0.6,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2784548,
       "end": 2784798,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2784804,
       "end": 2784938,
       "confidence": 0.59417,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2784954,
       "end": 2785086,
       "confidence": 0.77161,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "if",
       "start": 2785108,
       "end": 2785294,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2785332,
       "end": 2785498,
       "confidence": 0.4,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "ever",
       "start": 2785524,
       "end": 2785714,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2785752,
       "end": 2785954,
       "confidence": 0.99996,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2785992,
       "end": 2786194,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "said,",
       "start": 2786232,
       "end": 2786434,
       "confidence": 0.76,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 2786472,
       "end": 2786722,
       "confidence": 0.99881,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "mentally.",
       "start": 2786776,
       "end": 2787650,
       "confidence": 0.93325,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2789990,
       "end": 2790354,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2790392,
       "end": 2790558,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2790574,
       "end": 2790754,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "saying",
       "start": 2790792,
       "end": 2790994,
       "confidence": 1.0,
       "score": 20
     },
     {
       "speaker": "A",
       "text": "this,",
       "start": 2791032,
       "end": 2791460,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2791460,
       "end": 2791940,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2791940,
       "end": 2791954,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "type",
       "start": 2791992,
       "end": 2792242,
       "confidence": 0.99983,
       "score": 16
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2792296,
       "end": 2792514,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "me,",
       "start": 2792552,
       "end": 2793042,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "actually.",
       "start": 2793176,
       "end": 2793860,
       "confidence": 0.9998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "They",
       "start": 2795030,
       "end": 2795346,
       "confidence": 0.99981,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2795368,
       "end": 2795506,
       "confidence": 0.9998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "pretty",
       "start": 2795528,
       "end": 2795714,
       "confidence": 0.99971,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "sensitive.",
       "start": 2795752,
       "end": 2796530,
       "confidence": 0.4546,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 2797050,
       "end": 2797560,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2797560,
       "end": 2798700,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2798700,
       "end": 2798934,
       "confidence": 0.99993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2798972,
       "end": 2799174,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2799212,
       "end": 2799366,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 2799388,
       "end": 2799526,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2799548,
       "end": 2799734,
       "confidence": 0.91849,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2799772,
       "end": 2799926,
       "confidence": 0.99999,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 2799948,
       "end": 2800134,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2800172,
       "end": 2800422,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "everything",
       "start": 2800476,
       "end": 2801126,
       "confidence": 0.99987,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 2801308,
       "end": 2801606,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anybody",
       "start": 2801628,
       "end": 2801958,
       "confidence": 0.99998,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "under",
       "start": 2802044,
       "end": 2802342,
       "confidence": 0.99938,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "them.",
       "start": 2802396,
       "end": 2803000,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 2804090,
       "end": 2804720,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 2804720,
       "end": 2807420,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh.",
       "start": 2808040,
       "end": 2809580,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "If",
       "start": 2809580,
       "end": 2809962,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2810016,
       "end": 2810234,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "gets",
       "start": 2810272,
       "end": 2810474,
       "confidence": 1.0,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2810512,
       "end": 2810666,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2810688,
       "end": 2810874,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "point",
       "start": 2810912,
       "end": 2811306,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2811408,
       "end": 2812060,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2812750,
       "end": 2813162,
       "confidence": 0.6959,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "suspect",
       "start": 2813216,
       "end": 2813702,
       "confidence": 0.99992,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2813766,
       "end": 2813946,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2813968,
       "end": 2814154,
       "confidence": 0.99593,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 2814192,
       "end": 2814394,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2814432,
       "end": 2814730,
       "confidence": 0.96266,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 2814800,
       "end": 2815370,
       "confidence": 0.99997,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 2815520,
       "end": 2815834,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "10th",
       "start": 2815872,
       "end": 2816246,
       "confidence": 0.87,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2816278,
       "end": 2816426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2816448,
       "end": 2816634,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "things",
       "start": 2816672,
       "end": 2817260,
       "confidence": 0.99994,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2817710,
       "end": 2818026,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "their",
       "start": 2818048,
       "end": 2818282,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "whole",
       "start": 2818336,
       "end": 2818602,
       "confidence": 1.0,
       "score": 9
     },
     {
       "speaker": "A",
       "text": "repertoire",
       "start": 2818656,
       "end": 2819302,
       "confidence": 0.98421,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "than",
       "start": 2819366,
       "end": 2819594,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2819632,
       "end": 2819786,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do,",
       "start": 2819808,
       "end": 2820380,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2820830,
       "end": 2821194,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "are",
       "start": 2821232,
       "end": 2821434,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "already,",
       "start": 2821472,
       "end": 2821962,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2822040,
       "end": 2822200,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "touchy",
       "start": 2822200,
       "end": 2822694,
       "confidence": 0.36546,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "on",
       "start": 2822742,
       "end": 2822858,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 2822864,
       "end": 2823034,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2823072,
       "end": 2823226,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "mean,",
       "start": 2823248,
       "end": 2823386,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "they",
       "start": 2823408,
       "end": 2823498,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2823504,
       "end": 2823686,
       "confidence": 0.99972,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "like",
       "start": 2823718,
       "end": 2823962,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "A",
       "text": "that.",
       "start": 2824016,
       "end": 2824620,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2825470,
       "end": 2825846,
       "confidence": 0.99926,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "trying",
       "start": 2825878,
       "end": 2826026,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2826048,
       "end": 2826186,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 2826208,
       "end": 2826346,
       "confidence": 1.0,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2826368,
       "end": 2826506,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it's",
       "start": 2826528,
       "end": 2826726,
       "confidence": 0.9766,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2826758,
       "end": 2826918,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2826944,
       "end": 2827086,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2827108,
       "end": 2827246,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2827268,
       "end": 2827406,
       "confidence": 0.99998,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2827428,
       "end": 2827566,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "much",
       "start": 2827588,
       "end": 2827726,
       "confidence": 0.99997,
       "score": 15
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2827748,
       "end": 2827934,
       "confidence": 0.99994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 2827972,
       "end": 2828078,
       "confidence": 0.9953,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2828084,
       "end": 2828206,
       "confidence": 0.93,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "these",
       "start": 2828228,
       "end": 2828366,
       "confidence": 0.99978,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "people",
       "start": 2828388,
       "end": 2828622,
       "confidence": 1.0,
       "score": 50
     },
     {
       "speaker": "A",
       "text": "do.",
       "start": 2828676,
       "end": 2828846,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "In",
       "start": 2828868,
       "end": 2829006,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 2829028,
       "end": 2829214,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cases,",
       "start": 2829252,
       "end": 2829546,
       "confidence": 0.99987,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2829578,
       "end": 2829786,
       "confidence": 0.84462,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "convinced",
       "start": 2829818,
       "end": 2830234,
       "confidence": 0.99659,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2830282,
       "end": 2830398,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 2830404,
       "end": 2830574,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2830612,
       "end": 2830814,
       "confidence": 0.98559,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "more.",
       "start": 2830852,
       "end": 2831390,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2831540,
       "end": 2831950,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2832020,
       "end": 2832302,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2832356,
       "end": 2832526,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "case",
       "start": 2832548,
       "end": 2832686,
       "confidence": 0.99995,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2832708,
       "end": 2832846,
       "confidence": 0.63,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "my",
       "start": 2832868,
       "end": 2833006,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "immediate",
       "start": 2833028,
       "end": 2833466,
       "confidence": 0.9432,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "boss,",
       "start": 2833498,
       "end": 2833834,
       "confidence": 0.99969,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2833882,
       "end": 2834046,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "will",
       "start": 2834068,
       "end": 2834206,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "never",
       "start": 2834228,
       "end": 2834414,
       "confidence": 0.99985,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2834452,
       "end": 2834618,
       "confidence": 0.99994,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2834644,
       "end": 2834834,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "things",
       "start": 2834872,
       "end": 2835026,
       "confidence": 0.99597,
       "score": 13
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2835048,
       "end": 2835234,
       "confidence": 0.99963,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2835272,
       "end": 2835378,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "zipper",
       "start": 2835384,
       "end": 2835822,
       "confidence": 0.85108,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "business",
       "start": 2835886,
       "end": 2836210,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2836280,
       "end": 2836514,
       "confidence": 0.9974,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "knows,",
       "start": 2836552,
       "end": 2837326,
       "confidence": 0.94588,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "because,",
       "start": 2837518,
       "end": 2838114,
       "confidence": 0.95514,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "truthfully,",
       "start": 2838232,
       "end": 2838702,
       "confidence": 0.43581,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2838766,
       "end": 2838958,
       "confidence": 0.99847,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2838974,
       "end": 2839106,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2839128,
       "end": 2839362,
       "confidence": 0.71,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "interested",
       "start": 2839416,
       "end": 2840020,
       "confidence": 0.99987,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2840950,
       "end": 2841266,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2841288,
       "end": 2841474,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 2841512,
       "end": 2841714,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "aspects",
       "start": 2841752,
       "end": 2842238,
       "confidence": 0.72254,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2842254,
       "end": 2842386,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2842408,
       "end": 2842546,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2842568,
       "end": 2842706,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2842728,
       "end": 2842914,
       "confidence": 0.99988,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is.",
       "start": 2842952,
       "end": 2843540,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And,",
       "start": 2843990,
       "end": 2844500,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "um,",
       "start": 2844500,
       "end": 2845100,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2845100,
       "end": 2845346,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "am",
       "start": 2845368,
       "end": 2845506,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "never",
       "start": 2845528,
       "end": 2845714,
       "confidence": 0.99702,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 2845752,
       "end": 2845858,
       "confidence": 0.91,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2845864,
       "end": 2845986,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know.",
       "start": 2846008,
       "end": 2846242,
       "confidence": 0.99966,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2846296,
       "end": 2846418,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2846424,
       "end": 2846606,
       "confidence": 0.78018,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 2846638,
       "end": 2846882,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "half",
       "start": 2846936,
       "end": 2847154,
       "confidence": 1.0,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2847192,
       "end": 2847346,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "much",
       "start": 2847368,
       "end": 2847554,
       "confidence": 0.99999,
       "score": 15
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2847592,
       "end": 2847794,
       "confidence": 0.99904,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2847832,
       "end": 2848034,
       "confidence": 0.83,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2848072,
       "end": 2848226,
       "confidence": 0.99766,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2848248,
       "end": 2848434,
       "confidence": 0.99979,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "does",
       "start": 2848472,
       "end": 2848722,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2848776,
       "end": 2848994,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 2849032,
       "end": 2849234,
       "confidence": 0.99989,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2849272,
       "end": 2849378,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2849384,
       "end": 2849506,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "areas",
       "start": 2849528,
       "end": 2849886,
       "confidence": 0.99917,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2849918,
       "end": 2850030,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2850040,
       "end": 2850214,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "knows",
       "start": 2850252,
       "end": 2850466,
       "confidence": 0.99997,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2850498,
       "end": 2850646,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 2850668,
       "end": 2850806,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2850828,
       "end": 2851014,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "anything",
       "start": 2851052,
       "end": 2851254,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2851292,
       "end": 2851446,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2851468,
       "end": 2851606,
       "confidence": 0.99998,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2851628,
       "end": 2851766,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "other",
       "start": 2851788,
       "end": 2851926,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "areas,",
       "start": 2851948,
       "end": 2852226,
       "confidence": 0.9994,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2852258,
       "end": 2852406,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "isn't",
       "start": 2852428,
       "end": 2852626,
       "confidence": 0.99899,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 2852658,
       "end": 2852806,
       "confidence": 0.9997,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "going",
       "start": 2852828,
       "end": 2852966,
       "confidence": 0.69,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2852988,
       "end": 2853078,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "be",
       "start": 2853084,
       "end": 2853206,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "aware",
       "start": 2853228,
       "end": 2853506,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "of.",
       "start": 2853538,
       "end": 2854118,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Because",
       "start": 2854284,
       "end": 2854806,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2854908,
       "end": 2855126,
       "confidence": 0.9998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doesn't",
       "start": 2855148,
       "end": 2855346,
       "confidence": 0.75958,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2855378,
       "end": 2855574,
       "confidence": 0.99997,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "those",
       "start": 2855612,
       "end": 2855862,
       "confidence": 0.99976,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "areas",
       "start": 2855916,
       "end": 2856274,
       "confidence": 0.71223,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "exist",
       "start": 2856322,
       "end": 2856674,
       "confidence": 0.9993,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "even.",
       "start": 2856722,
       "end": 2857320,
       "confidence": 0.84993,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "But",
       "start": 2858410,
       "end": 2858822,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2858876,
       "end": 2859046,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "is",
       "start": 2859068,
       "end": 2859254,
       "confidence": 0.87,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "touchy",
       "start": 2859292,
       "end": 2859746,
       "confidence": 0.99976,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "enough.",
       "start": 2859778,
       "end": 2859974,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "So",
       "start": 2860012,
       "end": 2860166,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2860188,
       "end": 2860326,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 2860348,
       "end": 2860534,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2860572,
       "end": 2860726,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "smells",
       "start": 2860748,
       "end": 2861106,
       "confidence": 0.95356,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2861138,
       "end": 2861298,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2861324,
       "end": 2861418,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 2861424,
       "end": 2861594,
       "confidence": 0.51,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "know",
       "start": 2861632,
       "end": 2861834,
       "confidence": 0.99976,
       "score": 42
     },
     {
       "speaker": "A",
       "text": "more",
       "start": 2861872,
       "end": 2862074,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2862112,
       "end": 2862362,
       "confidence": 0.99971,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 2862416,
       "end": 2862634,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2862672,
       "end": 2862826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "it.",
       "start": 2862848,
       "end": 2863322,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2863456,
       "end": 2863754,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "furthermore,",
       "start": 2863792,
       "end": 2864374,
       "confidence": 0.99996,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2864422,
       "end": 2864634,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "applies",
       "start": 2864672,
       "end": 2865142,
       "confidence": 0.56734,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "particularly",
       "start": 2865206,
       "end": 2865686,
       "confidence": 0.9936,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2865718,
       "end": 2865866,
       "confidence": 0.73,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "what",
       "start": 2865888,
       "end": 2866026,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2866048,
       "end": 2866138,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "might",
       "start": 2866144,
       "end": 2866314,
       "confidence": 0.99787,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "call",
       "start": 2866352,
       "end": 2866602,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "extracurricular",
       "start": 2866656,
       "end": 2867494,
       "confidence": 0.99946,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "things.",
       "start": 2867542,
       "end": 2868234,
       "confidence": 0.99259,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "For",
       "start": 2868432,
       "end": 2868746,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "instance,",
       "start": 2868768,
       "end": 2869062,
       "confidence": 0.72463,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2869126,
       "end": 2869354,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "horrifies",
       "start": 2869392,
       "end": 2869894,
       "confidence": 0.52696,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2869942,
       "end": 2870154,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "with",
       "start": 2870192,
       "end": 2870394,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 2870432,
       "end": 2870586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2870608,
       "end": 2870698,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "his",
       "start": 2870704,
       "end": 2870922,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "economic",
       "start": 2870976,
       "end": 2871910,
       "confidence": 0.83533,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2872070,
       "end": 2872394,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "political",
       "start": 2872432,
       "end": 2872982,
       "confidence": 0.99998,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "inconsistencies",
       "start": 2873046,
       "end": 2874086,
       "confidence": 0.56647,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 2874198,
       "end": 2874474,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lunchtime.",
       "start": 2874512,
       "end": 2875254,
       "confidence": 0.99201,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2875382,
       "end": 2875626,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I'm",
       "start": 2875648,
       "end": 2875926,
       "confidence": 0.51938,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "sure",
       "start": 2875958,
       "end": 2876154,
       "confidence": 1.0,
       "score": 6
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2876192,
       "end": 2876394,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "once",
       "start": 2876432,
       "end": 2876586,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2876608,
       "end": 2876746,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2876768,
       "end": 2876858,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "while",
       "start": 2876864,
       "end": 2877082,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2877136,
       "end": 2877306,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "don't",
       "start": 2877328,
       "end": 2877478,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "get",
       "start": 2877494,
       "end": 2877626,
       "confidence": 0.99999,
       "score": 37
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2877648,
       "end": 2877834,
       "confidence": 0.65,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "covered",
       "start": 2877872,
       "end": 2878246,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "up.",
       "start": 2878278,
       "end": 2878860,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "And",
       "start": 2879710,
       "end": 2880074,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2880112,
       "end": 2880362,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "doesn't",
       "start": 2880416,
       "end": 2880726,
       "confidence": 0.99951,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "do",
       "start": 2880758,
       "end": 2880954,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "any",
       "start": 2880992,
       "end": 2881194,
       "confidence": 0.99932,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "good.",
       "start": 2881232,
       "end": 2881820,
       "confidence": 0.99842,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "You.",
       "start": 2883870,
       "end": 2884258,
       "confidence": 0.83,
       "score": 0
     },
     {
       "speaker": "C",
       "text": "It.",
       "start": 2884304,
       "end": 2884900,
       "confidence": 0.77,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "There",
       "start": 2897610,
       "end": 2897926,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "are",
       "start": 2897948,
       "end": 2898134,
       "confidence": 0.99984,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "some",
       "start": 2898172,
       "end": 2898326,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "fundamental",
       "start": 2898348,
       "end": 2898994,
       "confidence": 0.92302,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "differences",
       "start": 2899042,
       "end": 2899602,
       "confidence": 0.99962,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "in",
       "start": 2899666,
       "end": 2900280,
       "confidence": 0.86,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "basic",
       "start": 2901850,
       "end": 2902100,
       "confidence": 0.9998,
       "score": 1
     },
     {
       "speaker": "B",
       "text": "m",
       "start": 2902100,
       "end": 2902120,
       "confidence": 0.94,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "attitudes",
       "start": 2902482,
       "end": 2903362,
       "confidence": 0.84095,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "like",
       "start": 2903506,
       "end": 2903814,
       "confidence": 1.0,
       "score": 56
     },
     {
       "speaker": "B",
       "text": "that.",
       "start": 2903852,
       "end": 2904102,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Yeah.",
       "start": 2904156,
       "end": 2904518,
       "confidence": 0.72,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "And",
       "start": 2904604,
       "end": 2904902,
       "confidence": 0.8,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "sometimes",
       "start": 2904956,
       "end": 2905414,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "B",
       "text": "these",
       "start": 2905532,
       "end": 2905862,
       "confidence": 0.988,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "show",
       "start": 2905916,
       "end": 2906230,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "B",
       "text": "and",
       "start": 2906300,
       "end": 2906486,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "B",
       "text": "they.",
       "start": 2906508,
       "end": 2906838,
       "confidence": 0.99563,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2906924,
       "end": 2907174,
       "confidence": 0.96,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "think",
       "start": 2907212,
       "end": 2907366,
       "confidence": 1.0,
       "score": 25
     },
     {
       "speaker": "A",
       "text": "they,",
       "start": 2907388,
       "end": 2907960,
       "confidence": 0.9682,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2908890,
       "end": 2909254,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2909292,
       "end": 2909446,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 2909468,
       "end": 2909654,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "day,",
       "start": 2909692,
       "end": 2909942,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "cut",
       "start": 2909996,
       "end": 2910214,
       "confidence": 0.95,
       "score": 4
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2910252,
       "end": 2910406,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "apart",
       "start": 2910428,
       "end": 2911074,
       "confidence": 0.9989,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2911202,
       "end": 2911494,
       "confidence": 0.97,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "same",
       "start": 2911532,
       "end": 2911686,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "day.",
       "start": 2911708,
       "end": 2911894,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He",
       "start": 2911932,
       "end": 2912086,
       "confidence": 0.9304,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "gave",
       "start": 2912108,
       "end": 2912246,
       "confidence": 0.99999,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2912268,
       "end": 2912406,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2912428,
       "end": 2912518,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "long",
       "start": 2912524,
       "end": 2912694,
       "confidence": 0.99992,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "winded",
       "start": 2912732,
       "end": 2913026,
       "confidence": 0.9995,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "argument.",
       "start": 2913058,
       "end": 2913346,
       "confidence": 0.67721,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "He",
       "start": 2913378,
       "end": 2913526,
       "confidence": 0.535,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "gave",
       "start": 2913548,
       "end": 2913686,
       "confidence": 0.9999,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 2913708,
       "end": 2913846,
       "confidence": 0.98,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2913868,
       "end": 2913946,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2913948,
       "end": 2913979,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "girls",
       "start": 2913979,
       "end": 2914190,
       "confidence": 0.99471,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "sitting",
       "start": 2914210,
       "end": 2914406,
       "confidence": 0.99081,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "right",
       "start": 2914438,
       "end": 2914634,
       "confidence": 1.0,
       "score": 10
     },
     {
       "speaker": "A",
       "text": "beside",
       "start": 2914672,
       "end": 2914934,
       "confidence": 0.99349,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "me",
       "start": 2914982,
       "end": 2915146,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "at",
       "start": 2915168,
       "end": 2915258,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "lunch.",
       "start": 2915264,
       "end": 2915446,
       "confidence": 0.9999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "A",
       "start": 2915478,
       "end": 2915626,
       "confidence": 0.95,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "long",
       "start": 2915648,
       "end": 2915786,
       "confidence": 0.9999,
       "score": 12
     },
     {
       "speaker": "A",
       "text": "winded",
       "start": 2915808,
       "end": 2916086,
       "confidence": 0.99963,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "argument",
       "start": 2916118,
       "end": 2916502,
       "confidence": 0.5965,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2916566,
       "end": 2917274,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "I",
       "start": 2917472,
       "end": 2917786,
       "confidence": 0.82,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 2917808,
       "end": 2917994,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "absolutely",
       "start": 2918032,
       "end": 2918378,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "wrong",
       "start": 2918464,
       "end": 2918714,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "for",
       "start": 2918752,
       "end": 2918906,
       "confidence": 0.98,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2918928,
       "end": 2919066,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "company",
       "start": 2919088,
       "end": 2919274,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2919312,
       "end": 2919466,
       "confidence": 0.54,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "give",
       "start": 2919488,
       "end": 2919674,
       "confidence": 0.9997,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2919712,
       "end": 2919866,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bonus",
       "start": 2919888,
       "end": 2920650,
       "confidence": 0.67,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "gift",
       "start": 2922030,
       "end": 2922502,
       "confidence": 0.80297,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "stock",
       "start": 2922566,
       "end": 2922934,
       "confidence": 0.85231,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2922982,
       "end": 2923242,
       "confidence": 0.52,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "employees",
       "start": 2923296,
       "end": 2923846,
       "confidence": 0.99992,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "as",
       "start": 2923878,
       "end": 2924074,
       "confidence": 0.99946,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2924112,
       "end": 2924218,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "bonus",
       "start": 2924224,
       "end": 2924582,
       "confidence": 1.0,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 2924646,
       "end": 2924874,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2924912,
       "end": 2925114,
       "confidence": 0.5,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2925152,
       "end": 2925354,
       "confidence": 0.91,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "capitalistic",
       "start": 2925392,
       "end": 2926134,
       "confidence": 0.99979,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "system.",
       "start": 2926182,
       "end": 2926490,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Some",
       "start": 2926560,
       "end": 2926842,
       "confidence": 0.99767,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "way",
       "start": 2926896,
       "end": 2927558,
       "confidence": 0.99,
       "score": 32
     },
     {
       "speaker": "A",
       "text": "that",
       "start": 2927744,
       "end": 2928142,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2928196,
       "end": 2928800,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "should",
       "start": 2929410,
       "end": 2929822,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "only",
       "start": 2929876,
       "end": 2930286,
       "confidence": 0.84,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "have",
       "start": 2930388,
       "end": 2930846,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "even",
       "start": 2930948,
       "end": 2931262,
       "confidence": 0.99998,
       "score": 19
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2931316,
       "end": 2931486,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "most",
       "start": 2931508,
       "end": 2931694,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "minute",
       "start": 2931732,
       "end": 2932106,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "say",
       "start": 2932138,
       "end": 2932382,
       "confidence": 0.76,
       "score": 18
     },
     {
       "speaker": "A",
       "text": "so",
       "start": 2932436,
       "end": 2932654,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2932692,
       "end": 2932894,
       "confidence": 0.99995,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2932932,
       "end": 2933086,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "business",
       "start": 2933108,
       "end": 2933486,
       "confidence": 1.0,
       "score": 5
     },
     {
       "speaker": "A",
       "text": "because",
       "start": 2933588,
       "end": 2934094,
       "confidence": 0.70582,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "you",
       "start": 2934212,
       "end": 2934494,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "had",
       "start": 2934532,
       "end": 2934782,
       "confidence": 0.74006,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "been",
       "start": 2934836,
       "end": 2935054,
       "confidence": 0.99999,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "able",
       "start": 2935092,
       "end": 2935294,
       "confidence": 1.0,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2935332,
       "end": 2935582,
       "confidence": 0.88,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "save",
       "start": 2935636,
       "end": 2935950,
       "confidence": 0.52,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "your",
       "start": 2936020,
       "end": 2936254,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "money",
       "start": 2936292,
       "end": 2936638,
       "confidence": 1.0,
       "score": 7
     },
     {
       "speaker": "A",
       "text": "and",
       "start": 2936724,
       "end": 2937022,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "by",
       "start": 2937076,
       "end": 2937294,
       "confidence": 0.99991,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "your",
       "start": 2937332,
       "end": 2937486,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "own",
       "start": 2937508,
       "end": 2937790,
       "confidence": 0.58501,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "choice",
       "start": 2937860,
       "end": 2938330,
       "confidence": 0.9974,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "bought",
       "start": 2938410,
       "end": 2938794,
       "confidence": 0.86094,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2938842,
       "end": 2939102,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "stock.",
       "start": 2939156,
       "end": 2939574,
       "confidence": 0.96484,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "It",
       "start": 2939642,
       "end": 2939826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "was",
       "start": 2939848,
       "end": 2940034,
       "confidence": 0.98211,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "not",
       "start": 2940072,
       "end": 2940322,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "proper",
       "start": 2940376,
       "end": 2940642,
       "confidence": 0.99905,
       "score": 2
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2940696,
       "end": 2940866,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "give",
       "start": 2940888,
       "end": 2941026,
       "confidence": 0.99999,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "it",
       "start": 2941048,
       "end": 2941138,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "to",
       "start": 2941144,
       "end": 2941266,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "him.",
       "start": 2941288,
       "end": 2941762,
       "confidence": 0.34,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "Now",
       "start": 2941896,
       "end": 2942194,
       "confidence": 0.99,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he",
       "start": 2942232,
       "end": 2942386,
       "confidence": 0.99998,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "turns",
       "start": 2942408,
       "end": 2942606,
       "confidence": 0.99997,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "around,",
       "start": 2942638,
       "end": 2942786,
       "confidence": 0.99997,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "he's",
       "start": 2942808,
       "end": 2943038,
       "confidence": 0.99942,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "got",
       "start": 2943054,
       "end": 2943186,
       "confidence": 1.0,
       "score": 17
     },
     {
       "speaker": "A",
       "text": "some",
       "start": 2943208,
       "end": 2943394,
       "confidence": 0.96037,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "kind",
       "start": 2943432,
       "end": 2943538,
       "confidence": 1.0,
       "score": 30
     },
     {
       "speaker": "A",
       "text": "of",
       "start": 2943544,
       "end": 2943666,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "an",
       "start": 2943688,
       "end": 2943826,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "argument",
       "start": 2943848,
       "end": 2944530,
       "confidence": 0.57343,
       "score": 3
     },
     {
       "speaker": "A",
       "text": "where,",
       "start": 2945590,
       "end": 2946098,
       "confidence": 0.74296,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "uh,",
       "start": 2946100,
       "end": 2946240,
       "confidence": 0.85,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "well,",
       "start": 2946240,
       "end": 2946434,
       "confidence": 0.5193,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "this",
       "start": 2946472,
       "end": 2946674,
       "confidence": 0.9,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "typical",
       "start": 2946712,
       "end": 2947054,
       "confidence": 0.99859,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "one",
       "start": 2947102,
       "end": 2947266,
       "confidence": 1.0,
       "score": 29
     },
     {
       "speaker": "A",
       "text": "in",
       "start": 2947288,
       "end": 2947426,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "the",
       "start": 2947448,
       "end": 2947538,
       "confidence": 1.0,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "paper",
       "start": 2947544,
       "end": 2947762,
       "confidence": 0.99999,
       "score": 1
     },
     {
       "speaker": "A",
       "text": "about",
       "start": 2947816,
       "end": 2948034,
       "confidence": 0.9965,
       "score": 0
     },
     {
       "speaker": "A",
       "text": "a",
       "start": 2948072,
     },
   ]