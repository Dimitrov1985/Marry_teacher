
const myResumeBtn = document.querySelector('#myResumeBtn');
const downMyResume = document.querySelector('[data-modal="#modal_resume_down"]');

// кнопка открытия
const modalMyResume = document.querySelector('#modalMyResume'); 
const closeMyResume = document.querySelector('#closeMyResume'); 

const hystmodalClose = document.querySelector('.hystmodal__close');
const work = document.querySelector('#work');
const content = myModal.querySelector('.content');
const aboutMe = document.querySelector('#aboutMe');
const contact = document.querySelector('#contact');

const hireMeButtons = document.querySelectorAll('[data-modal="#modal_hire_me"]');

hireMeButtons.forEach(button => {
    button.addEventListener('click', () => {
        myModal.style.display = 'flex';
        content.innerHTML =
            `<h2>Why You Should Hire Me as a Teacher</h2>
    <p>You should hire me because I am responsible, hardworking, and truly love working with children. I know how to find an approach to each student, creating an atmosphere of trust and interest in learning. For me, it is important not only to give knowledge but
     also to foster self-confidence, curiosity, and a desire to learn.</p>
    <p>I have experience in organizing lessons, preparing learning materials, and using different teaching methods to make classes clear and engaging. 
    I am always ready to grow, apply new technologies, and use modern approaches in education.</p>
    <p>I am confident that my energy, patience, and commitment to results will help me become a valuable member of your team and bring real benefits to
     both the school and the students.</p>`;

    });
});


contact.addEventListener('click', () => {
    myModal.style.display = 'flex';
    content.innerHTML =
        `<div class="row"><img src="images/line.png" alt="Line"><span>mashik.t.</span></div>
  <div class="row"><img src="images/face_book.png" alt="Facebook"><span>Maria Tikhomirova</span></div>
  <div class="row"><img src="images/instagram.png" alt="Instagram"><span>mariatikhomirova</span></div>
`;
});



aboutMe.addEventListener('click', () => {
    myModal.style.display = 'flex';
    content.innerHTML = `<h2>About Me</h2>
    <p>I am a passionate and dedicated English teacher with a strong love for 
    teaching and helping students grow. I believe that learning should be interesting, engaging, and meaningful, so I always try to create a positive and supportive classroom environment.<br><br>

    I enjoy preparing lessons that are both educational and fun, 
    using a variety of methods to help each student understand and practice new concepts. My goal is not only to teach English but also to inspire confidence, curiosity, and a love of learning in every student.<br><br>

    I am patient, responsible, and committed to seeing my students succeed. 
    I enjoy building personal connections with my students and helping them overcome challenges, celebrate achievements, and reach their full potential.<br><br>

    Being a teacher means much more than giving knowledge — it means guiding, 
    motivating, and supporting young minds as they develop skills and grow into confident, independent individuals.</p>`
})


work.addEventListener('click', () => {
    myModal.style.display = 'flex';
    content.innerHTML = `<h2>Why I Love Being a Teacher</h2>
    <p> I love being a teacher because it gives me the opportunity to share knowledge and experience with children every day. It is important for me to see how students take their first steps in learning, 
    discover new things, and start believing in themselves. Every lesson is not only about teaching, but also about communication, energy, and emotions. The joy in a child’s eyes when they solve a problem or learn a new word is the best reward.</p>
    <p> My duties as a teacher are diverse and responsible. First of all, I prepare lessons: I choose materials, create assignments, and explain new topics. During classes, I try to engage students, support them, and help each one overcome difficulties. I also check their work, evaluate progress, keep records, 
    and communicate with parents to support children’s development together.</p>
    <p> Being a teacher means not only teaching but also educating and being a role model. I enjoy helping children become more independent, confident, and kind. I believe my job 
    is important because it influences the future of my students and society as a whole.</p>
    <img src="images/lesson.jpg" alt="Котик">`;


});


hystmodalClose.addEventListener('click', () => {

    myModal.style.display = 'none';

    content.innerHTML = '';

})


// собираем обе кнопки
const resumeButtons = [
    document.querySelector('#myResumeBtn'),
    document.querySelector('[data-modal="#modal_resume_down"]')
];

// модалка


// вешаем клик на обе кнопки
resumeButtons.forEach(btn => {
    if (btn) {
        btn.addEventListener('click', () => {
            modalMyResume.style.display = 'flex';
            setTimeout(() => {
                modalMyResume.classList.add('show');
            }, 10);
        });
    }
});

// закрытие крестиком
closeMyResume.addEventListener('click', () => {
    modalMyResume.classList.remove('show');
    setTimeout(() => {
        modalMyResume.style.display = 'none';
    }, 800);
});

// закрытие по клику вне окна
window.addEventListener('click', (e) => {
    if (e.target === modalMyResume) {
        modalMyResume.classList.remove('show');
        setTimeout(() => {
            modalMyResume.style.display = 'none';
        }, 800);
    }
});





