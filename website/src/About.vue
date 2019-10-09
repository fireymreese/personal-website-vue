<template>
    <div class="col">
        <div class="row">
            <div id="developer-persona" class="col justify-content-center">
                <img src="./assets/general.jpg" alt="">
                <h3>The Developer</h3>
                <p>
                    First and foremost, I am a software developer. I am currently a senior at Rose-Hulman Inst of Tech 
                    studying Computer Science. Within the field, my passions lie in frontend development whether it be 
                    on Web, Android, or iOS. It gives me satisfaction to see my work visually through the UI. Furthermore, my
                    career goal is to help people live a better life. And by providing an enjoyable user experience 
                    on the UI, I am promoting an smooth transition to technology for those who get frustrated with it.
                </p>
            </div>
            <div class="col" id="dancer-persona">
                <img src="./assets/dancer.jpg" alt="">
                <h3>The Dancer</h3>
                <p>
                    In my free time I enjoy dancing. I went out on a limb my freshman year and joined a Swing Dance Club here on campus.
                    Fast forward 4 years later and I'm now the club president and one of the instructors. I dance anything from Blues to 
                    Lindy Hop to St. Louis Shag. I even spend many of my weekends at Swing events around the area. Now, I'm not afraid to
                    jump into any type of dance to broaden my horizon.
                </p>
            </div>
            <div class="col" id="photographer-persona">
                <img src="./assets/photographer.jpg" alt="">
                <h3>The Photographer</h3>
                <p>
                    I recently took up photography as a hobby around January 2019. I studied abroad in Chengdu, China during the spring of 
                    2019 semester. I wanted my friends to experience China as I experienced it as well as give myself stories to last a lifetime.
                    So, I "borrowed" my brother's camera for my time abroad. Since then, I have studied how to make pictures more appealing to the 
                    eye so that anyone can enjoy viewing my pictures.
                    <br><br>
                    Here is a link to a few of my pictures: (provide a flickr link or something...)
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .col, .row {
        height: 100%;
    }

    .row .col {
        margin: 10px;
    }

    img {
        width: 75%;
        padding: 10%;
        border-radius: 50%;
    }

    #developer-persona {
        background-color: #DDC9FE;
    }

    #dancer-persona {
        background-color: #C18074;
    }

    #photographer-persona {
        background-color: #FFDD7F;
    }
</style>