function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


// モーダルデータ
const modalData = {
    html: {
        title: "HTML",
        description: "中学3年生の時に学校の授業で学習しました。その後様々なサイトを検証でのぞいて自己学習を続けました。",
        image: "images/プログラミング言語/HTML.png"
    },
    css: {
        title: "CSS",
        description: "プログラミングの授業で学習しました。その他、サイト作成時に自己学習しました。",
        image: "images/プログラミング言語/CSS3_logo.png"
    },
    javascript: {
        title: "JavaScript",
        description: "JavaScript及びJavaScriptに関連する技術についての解説をまとめたサイトを作成しました。",
        image: "images/プログラミング言語/JavaScript.png"
    },
    python: {
        title: "Python",
        description: "プログラミングの授業で学習し、Google Colaboratoryを使って開発環境を構築しました。",
        image: "images/プログラミング言語/Python2.png"
    },
    c: {
        title: "C",
        description: "プログラミング研究部で学習しました。基本的なアルゴリズムやデータ構造を学びました。",
        image: "images/プログラミング言語/C.png"
    },
    cpp: {
        title: "C++",
        description: "プログラミング研究部で学習しました。オブジェクト指向プログラミングを学びました。",
        image: "images/プログラミング言語/C++.png"
    },
    arduino: {
        title: "Arduino",
        description: "授業や実習で学びました。センサーやマイコンを使ったプロジェクトを経験しました。",
        image: "images/環境技術/Arduino.png"
    },
    react: {
        title: "React",
        description: "主にTypeScriptと合わせて使用しています。学校の授業で学習した他、サイト作成時に自己学習しました。",
        image: "images/プログラミング言語/react.png"
    },
    typescript: {
        title: "TypeScript",
        description: "主にReactと合わせて使用しています。学校の授業で学習した他、サイト作成時に自己学習しました。",
        image: "images/プログラミング言語/Typescript.png"
    },
    github: {
        title: "GitHub",
        description: "1年生の頃の実験実習、また2年生のプログラミングの授業で学習しました。",
        image: "images/環境技術/GitHub.png"
    },
    googlecolab: {
        title: "Google Colaboratory",
        description: "プログラミングの授業で学習し、Pythonの開発環境として使用しています。",
        image: "images/環境技術/GoogleColaboratory.png"
    },
    vscode: {
        title: "VSCode",
        description: "Python、C、HTML、CSSなどの開発環境として使用しています。",
        image: "images/環境技術/VSCode.png"
    },
    arduinoide: {
        title: "Arduino IDE",
        description: "2年生の工学基礎実習でArduinoを稼働させるために使用しました。",
        image: "images/環境技術/ArduinoIDE.png"
    },
    tinkercad: {
        title: "TinkerCAD",
        description: "1年生の実験実習の3Dモデリング、2年生のマイクロコンピュータの授業の回路設計で使用しました。",
        image: "images/環境技術/TinkerCAD.png"
    },
};

// モーダルを開く
function openModal(key) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modal-image");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    const data = modalData[key];
    if (data) {
        modalImage.src = data.image;
        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;
        modal.style.display = "flex";
    }
}

// モーダルを閉じる
function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// スライダーの動作
function initSlider() {
    const sliders = document.querySelectorAll('.slider');
    sliders.forEach(slider => {
        const slides = slider.querySelector('.slides');
        const images = slides.querySelectorAll('img');
        let currentIndex = 0;

        // 自動スライド
        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            slides.style.transform = `translateX(-${currentIndex * 100}%)`;
        }, 3000);
    });
}

// ページ読み込み時にスライダーを初期化
document.addEventListener('DOMContentLoaded', initSlider);