무한 스크롤 UI 구현하기

오늘은 모바일 환경임을 가정하고 실습합니다.

컨텐츠를 페이징 하는 기법 중 하나로
아래로 스크롤하다 컨텐츠의 마지막 요소를 볼 즈음!!!
다음 컨텐츠가 있으면 불러오는 방식

facebook twitter instagram 등 sns에서 주로 사용됩니다.

구현 방식은 크게 두 가지

1. window의 scroll 이벤트를 통해 스크롤링이 일어날 때마다
   화면 전체의 height와 스크롤 위치를 통해 스크롤이 컨텐츠 끝 즈음에
   다다랐는지 체크해서 처리하는 방식( 전토적 방식)

2. intersection observer 방식

컴포넌트 구조
app 데이터를 여기서 불러옴 photolist로 데이터를 넘겨줌
photoList

app >> photoList >> app >> photoList >> app

인터셉션 옵져버!
