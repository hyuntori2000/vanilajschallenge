const years="2023"
const quotes= [
    {
        quote:"When you have faults, do not fear to abandon them.",
        author:years
    }
    ,
    {
        quote:"They must often change who would be constant in happiness or wisdom.."
        ,
        author:years
    }
    ,
    {
        quote:"Age is no guarantee of maturity.",
        author:years
    }
    ,
    {
        quote:"Youth is not always all it is touted to be.",
        autor:years
    }
    ,
    {
        quote:"You will face many defeats in life, but never let yourself be defeated. ",
        author:years
    }
    ,
    {
        quote:"금 목줄을 찬 배부른 개가 되느니 빗물에 목을 축이는 들개가 되겠다.",
        author:years
    }
    ,
    {
        quote:"패배를 두려워하지 마라, 죽음외에 패배는 전부 착각이다.",
        author:years
    },
    {
        quote:"웃어라, 세상은 아름답다.",
        author:years
    },
    {
        quote:"깨달음을 얻고 이를 실천하라",
        author:years
    },
    {
        quote:"Happy",
        author:years
    }

]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuotes=quotes[Math.floor(Math.random() * quotes.length)]
quote.innerText = todaysQuotes.quote;
author.innerText = todaysQuotes.author;
