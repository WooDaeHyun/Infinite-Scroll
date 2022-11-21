/*initialState: [
  {
    id: 1,
    imageUrl: '',
  }
]
*/

export default function PhotoList({ $target, initialState, onScrollEnded }) {
  let isInitialize = false;
  const $photoList = document.createElement("div");
  $target.appendChild($photoList);
  this.state = initialState;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.state.isLoading) {
          console.log("화면 끝", entry);
          if (this.state.totalCount > this.state.photos.length) {
            onScrollEnded();
          }
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  let $lastLi = null;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    if (!isInitialize) {
      $photoList.innerHTML = `
      <ul class="PhotoList__photos"></ul>
      `;
      isInitialize = true;
    }
    const { photos } = this.state;
    const $photos = $photoList.querySelector(`.PhotoList__photos`);

    photos.forEach((photo) => {
      if ($photos.querySelector(`li[data-id="${photo.id}"]`) === null) {
        const $li = document.createElement("li");
        $li.setAttribute("data-id", photo.id);
        $li.style = "list-style: none;min-height: 300px";
        $li.innerHTML = `<img width="100%" src="${photo.imagePath}" />`;

        $photos.appendChild($li);
      }
    });
    const $nextLi = $photos.querySelector("li:last-child");

    if ($nextLi !== null) {
      console.log($nextLi);
      if ($lastLi !== null) {
        observer.unobserve($lastLi);
      }
      $lastLi = $nextLi;
      observer.observe($lastLi);
    }
  };

  this.render();
}
