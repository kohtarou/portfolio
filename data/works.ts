import { Work } from "@/types";

export const works: Work[] = [
    {
        id: "index-design-article",
        title: "インデックス設計・講義",
        description: "データベースのインデックス設計に関する包括的な解説記事です。PostgreSQLの内部構造やコスト計算モデル、実験を通じたパフォーマンス検証について詳しくまとめています。",
        images: [], // No explicit image provided
        url: "https://kohtarou.github.io/INDEX-article/",
        tags: ["Database", "PostgreSQL", "Article"],
    },
    {
        id: "polygon-sim",
        title: "正多角形シミュレーター",
        description: "数値を入力すると数値に対応した正多角形を表示します。右の多角形は5.5を入力した時の出力です。",
        images: ["/images/polygon/正多角形2.png"],
        url: "https://colab.research.google.com/drive/1tz-5BgrgPw6BeD558gC3bKBZ0qPfMv7s",
        tags: ["Python", "Simulation"],
    },
    {
        id: "setsuna-no-mikiri",
        title: "刹那の見切り",
        description: "文化祭にチームで作成したゲームです。カービィのミニゲーム、刹那の見切りを参考しました。自分の役割は画像作成、調達、ゲーム性の判断でした。",
        images: [
            "/images/mikiri/刹那の見切り.png",
            "/images/mikiri/見切り画像2.png",
            "/images/mikiri/見切り画像3.png",
        ],
        url: "https://kou911.github.io/Fes/",
        tags: ["Game", "Team Project"],
    },
    {
        id: "js-explanation",
        title: "JavaScriptについての解説をまとめたサイト",
        description: "JavaScript及びJavaScriptに関連する技術についての解説をまとめたサイトです。",
        images: ["/images/programming-languages/JavaScript.png"],
        url: "https://kohtarou.github.io/JavaExplanation-main/",
        tags: ["JavaScript", "Documentation"],
    },
    {
        id: "server-guide",
        title: "サーバ構築の手順書",
        description: "この資料は、サーバ構築に関する手順書です。主に、これからサーバを構築する初学者を対象とし、まっさらなPCに対してWebサーバを立ち上げる方法を解説しています。Linux OSを利用し、特定のディストリビューションには依存せず、幅広い環境での適用が可能な内容です。",
        images: [], // No explicit image, maybe add a placeholder or PDF icon later
        url: "/サーバー構築の手順書.pdf", // Moved to public? Wait, I moved .pdf to _backup. I need to move it to public too if it's referenced.
        tags: ["Server", "Linux", "Documentation"],
    },
    {
        id: "todo-app",
        title: "Todoアプリ",
        description: "タスクの追加、削除、ソートなど基本的な機能を実装したTodoアプリです。タスクにはタイトル、期限、優先度、進捗の要素を持たせています。優先度や期限の頭にあるアイコンや進捗のゲージ、タスクの右上にあるバツボタンなど、直感的に理解・操作できるようなデザインを心がけました。",
        images: [], // No image in original
        url: "https://kohtarou.github.io/react-todo-app/",
        tags: ["React", "App"],
    },
    {
        id: "item-management-app",
        title: "アイテム管理アプリ",
        description: "このアプリは、あるゲーム内のイベントの種類とアイテム獲得数をまとめて分かりやすく可視化する事を目的としたものです。今後も使っていく予定なので、どんどんアップデートしていこうと思います。",
        images: [
            "/images/item-management/投稿一覧.png",
            "/images/item-management/投稿記事詳細.png",
            "/images/item-management/ログイン画面未入力.png",
            "/images/item-management/ログイン画面入力済み.png",
            "/images/item-management/管理者画面.png",
        ],
        url: "https://item-total-app.vercel.app/",
        tags: ["Web App", "Game Tool"],
        date: "2024-11-14",
    },
    {
        id: "shot-game",
        title: "スコア稼ぎゲーム「Shot」",
        description: "基本マウス操作で銃の照準を合わせ、目の前に次々出現する的をクリックで撃ってスコアを競うゲーム。",
        images: [
            "/images/aim-score/shot1.png",
            "/images/aim-score/shot2.png",
        ],
        url: "https://github.com/megumegu256/2024GroupC",
        tags: ["Game", "Shooting"],
    },
];
