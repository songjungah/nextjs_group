// 몽고 DB
// npm install mongodb
const {MongoClient} = require('mongodb');


// title, slug, image, summary, contants, creator, creator_email
const initData = [
    {
        title: "소프트웨어 개발 동아리",
        slug: "software-development-club",
         image: "/images/photo1.jpg",
        summary: "대학교의 소프트웨어 개발 동아리로, 학생들의 개발 실력 향상과 협업 경험을 목표로 합니다.",
         content: "소프트웨어 개발 동아리는 2015년에 설립되었으며, 매주 정기 스터디와 팀 프로젝트를 통해 최신 기술과 개발 트렌드를 공부합니다. 또한, 연 2회의 해커톤에 참가하여 실력을 테스트하고 네트워킹 기회를 제공합니다. 주요 활동으로는 정기 스터디, 팀 프로젝트, 해커톤 참가 등이 있으며, 주요 성과로는 캠퍼스 내 네비게이션 앱 개발 및 전국 대학 해커톤 1위 수상 등이 있습니다.",
         creator: "홍길동",
        creator_email: "honggildong@example.com"
    },
    {
        title: "로봇 동아리",
        slug: "robot-club",
        image: "/images/photo2.jpg",
        summary: "대학교의 로봇 제작 및 연구 동아리로, 다양한 로봇 프로젝트를 통해 실력을 쌓고 있습니다.",
        content: "로봇 동아리는 2012년에 설립되었으며, 다양한 로봇 제작 프로젝트와 대회 참가를 통해 회원들의 기술력을 키우고 있습니다. 매년 국제 로봇 경진대회에 참가하여 우수한 성적을 거두고 있으며, 로봇 제작 워크숍과 세미나도 정기적으로 개최합니다.",
        creator: "김철수",
        creator_email: "kimchulsoo@example.com"
    },
    {
        title: "음악 동아리",
        slug: "music-club",
        image: "/images/photo3.jpg",
        summary: "대학교의 음악 동아리로, 다양한 악기를 배우고 함께 연주하는 즐거움을 공유합니다.",
        content: "음악 동아리는 2008년에 설립되었으며, 매주 정기 연습과 공연을 통해 회원들의 음악 실력을 향상시키고 있습니다. 정기 공연, 버스킹, 합주 등 다양한 활동을 통해 음악을 사랑하는 학생들이 모여 함께 즐길 수 있는 시간을 가집니다.",
        creator: "이영희",
        creator_email: "leeyounghee@example.com"
    },
    {
        title: "봉사 동아리",
        slug: "volunteer-club",
        image: "/images/photo4.jpg",
        summary: "대학교의 봉사 동아리로, 지역 사회에 기여하는 다양한 봉사 활동을 진행하고 있습니다.",
        content: "봉사 동아리는 2010년에 설립되었으며, 지역 사회를 돕기 위한 다양한 봉사 활동을 진행하고 있습니다. 매주 정기적인 봉사활동을 통해 학생들이 지역사회에 기여할 수 있도록 하며, 다양한 프로젝트와 캠페인을 통해 사회 문제에 대한 인식을 높이고 있습니다.",
        creator: "박민수",
        creator_email: "parkminsoo@example.com"
    },
    {
        title: "사진 동아리",
        slug: "photo-club",
        image: "/images/photo5.jpg",
        summary: "대학교의 사진 동아리로, 사진 촬영 및 편집 기술을 배우고 공유하는 커뮤니티입니다.",
        content: "사진 동아리는 2013년에 설립되었으며, 매주 정기적인 촬영 모임과 워크숍을 통해 사진 촬영 기술을 배우고 공유하고 있습니다. 정기 전시회와 사진 콘테스트를 통해 회원들의 작품을 발표하며, 사진을 통한 소통과 교류를 추구합니다.",
        creator: "최지훈",
        creator_email: "choijihoon@example.com"
        },
        {
        title: "독서 토론 동아리",
        slug: "reading-discussion-club",
        image: "/images/photo6.jpg",
        summary: "대학교의 독서 토론 동아리로, 다양한 책을 읽고 토론하며 지식과 견해를 넓히는 기회를 제공합니다.",
        content: "독서 토론 동아리는 2011년에 설립되었으며, 매주 정기적인 독서 모임을 통해 다양한 주제의 책을 읽고 토론합니다. 회원들이 서로의 견해를 나누며 지식을 확장하고, 깊이 있는 대화를 나눌 수 있는 장을 제공합니다.",
        creator: "김지수",
        creator_email: "kimjisoo@example.com"}
    
]


// 몽고DB 연결
async function connectDB() {
    const url = ''
    const options = {};
    let connectDB;

    if(process.env.NODE_ENV === 'development'){
        if(!global._mongo){
            global._mongo = new MongoClient(url, options).connect()
        }
        return connectDB = global._mongo
    }else{
        return connectDB  = new MongoClient(url, options).connect()
    }
}


// 더미데이터 입력 (mydb 안에 group 안에 입력)
async function insertDummyData(){
    const client = await connectDB();   // url 연결
    const db = client.db('mydb')        // Database 이름으로 연결
    const collection = db.collection('group')       // group 컬렉션에 접근

    const result = await collection.insertMany(initData);      // 객체 배열을 전부 입력(insertOne > 객체하나)
    console.log(`${result} 입력`);
}
insertDummyData()
// node 파일명 > 터미널에 입력해야 실행됨
// node initdb.js