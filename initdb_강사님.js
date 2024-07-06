// 몽고DB
// npm install mongodb
const { MongoClient } = require('mongodb');

// title, slug, image, summary, content, creator, creator_email
const initData = [
    {
        title: '월간 모임 공지',
        slug: 'monthly-meeting-announcement',
        image: '/images/photo1.jpg',
        summary: '이번 달 일정을 공지합니다.',
        content: '이번 달 모임은 7월 15일 토요일 오후 2시에 열립니다. 많은 참여 부탁드립니다!',
        creator: '홍길동',
        creator_email: 'gildong@google.com'
    },
    {
        title: '야외 촬영 후기',
        slug: 'outdoor-photography-review',
        image: '/images/photo2.jpg',
        summary: '지난 야외 촬영 모임의 후기를 공유합니다.',
        content: '지난 6월 20일에 있었던 야외 촬영 모임은 매우 성공적이었습니다.',
        creator: '김유신',
        creator_email: 'yousin@naver.com'
    },
    {
        title: '초보자 가이드',
        slug: 'beginner-guide',
        image: '/images/photo3.jpg',
        summary: '초보자를 위한 가이드를 제공합니다.',
        content: `처음 시작하는 분들을 위해 기본적인 소개합니다. 
        궁금한 점이 있으면 언제든지 문의해 주세요.`,
        creator: '홍길동',
        creator_email: 'gildong@google.com'
    },
    {
        title: '전문가 초청 강연',
        slug: 'expert-lecture',
        image: '/images/photo4.jpg',
        summary: '전문가 초청 강연이 열립니다.',
        content: `다음 달 8월 10일, 초청 강연이 열립니다. 
        강연 후에는 Q&A 시간도 마련되어 있습니다.`,
        creator: '유관순',
        creator_email: 'soon123@naver.com'
    },
    {
        title: '정기 워크숍 안내',
        slug: 'regular-workshop',
        image: '/images/photo5.jpg',
        summary: '정기 워크숍 일정을 안내드립니다.',
        content: `정기 워크숍이 매주 수요일 오후 3시에 열립니다. 
        다양한 주제로 진행되는 워크숍에서 기술을 향상시켜 보세요. 
        참가를 원하시는 분들은 미리 신청해 주세요.`,
        creator: '홍길동',
        creator_email: 'gildong@google.com'
    }
];

// 몽고DB 연결
async function connectDB() {
    const url = 'mongodb+srv://admin:admin@';
    const options = {};
    let connectDB;
    
    if(process.env.NODE_ENV === 'development'){
        if(!global._mongo){
            global._mongo = new MongoClient(url, options).connect()
        }
        return connectDB = global._mongo
    }else{
        return connectDB = new MongoClient(url, options).connect()
    }
}
// 더미데이터 입력 (mydb 안에 group 안에 입력)
async function insertDummyData() {
    const client = await connectDB();       // url로 연결
    const db = client.db('mydb')            // Database 이름으로 연결
    const collection = db.collection('group')        // group 컬렉션에 접근

    const result = await collection.insertMany(initData);          // 객체 배열을 전부 입력 (insertOne)
    console.log(`${result} 입력`);
}
insertDummyData()
// node 파일명
// node initdb.js