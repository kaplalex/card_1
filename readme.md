Hey! I decided to make a digital birthday card for my sister last minute. 
I wanted it to work on the first attempt when I presented it to her on my laptop in person so that's what I optimized for.

This means there are a few issues with it that prevent it from working as intended on different devices.

    For one thing, I only got the backface visibility of the text to be hidden when I 
displayed the page in Safari. The card could be better if it works in different browsers. 
    Furthermore, it's not responsive. I designed it for the random size I happened to have
my browser window at and the design breaks easily when the viewport changes.
    Also, it relies heavily on the "hover" pseudo-selector so as far as I know, it's limited
to non-mobile devices.
    
UI:
I didn't want to have to explain too much (though I did wind up prompting her with, "yes, you can use the trackpad," and, "hover the image") so I made it pretty explicit in terms of directions. As soon as the user hovers near the card, an ugly "touch" command appears and more of those are used to guide the user to the end result. I think it could be better to make the card more intuitive so that someone can get the effect of the presentation without having to be told what to do.


Efficiency:
The card is designed to change one way so each "touch" command acts as a checkpoint that permenantly changes the card. I wanted to do this just using css and maybe a checkbox hack but I couldn't find a way to get that to work so I used JS. If there's a more efficient way to achieve that result that would be cool. 
    On a similar note, any way to make the JS more efficient/concise would be great. There's 
probably a lot to improve there

Cleanliness:
I wasn't so concerned with naming conventions and following the BEM model so the code could be a bit confusing.
    Moreover, I broke the code down into several sass files to make it easier to read but I 
may have overdone it a bit. Or there may be some things that are too long and could have been broken down more.

Functionality:
This version assumes the user will be patient and obedient. if the user explores the card more liberally, the effect of the card changes a lot (like it can skip parts of the text and thereby put the displayed text out of context). If theres a way to control for that so that the text seems to make sense at all times, that'd be great
    also, if the user hovers a checkpoint and then closes the card, the text continues to 
animate while the card is closed. it'd be nice to sort of pause the animation when the card is closed or at least speed it up to conclusion. That way, if the user hovers a checkpoint and then closes the card and quickly reopens it, she doesnt come into an animation halfway in progress.
    lastly (functionality/efficiency), the premise of an interactive card is simple but to 
add or subtract a checkpoint section of the card, a lot of complicated rewriting would be involved. I think there's probably a way to simplify so the card can be reusable and a sender can easily adjust the content and add more checkpoints/sections and more easily personalize it.

I see these all as potential future improvements for this project but basically I already achieved the low-bar vision I had in mind and I rather learn different material now so I'm leaving it as is. There are probably a bunch of other things that can be improved that I didn't mention (like the design for one thing). I may come back to it and change it (so I can be cheap and re-gift it to other family) but I don't have any plans to do so right now. If anyone wants to fork it and improve stuff that would be really cool and I'd love to see what you do with it. 

Note: I learned most of the good parts of the CSS here from Jonas Schmedtmann's Udemy course, which I recommend: https://www.udemy.com/advanced-css-and-sass/
Any poor craftsmanship should reflect poorly on my work-ethic and not on Jonas's teachership.

Thanks :]
 Alex RK
{kaplalex}