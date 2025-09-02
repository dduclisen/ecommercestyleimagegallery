$(document).ready(function () {
  const $mainImage = $("#mainImage");
  const $thumbs = $(".thumb");
  let currentIndex = 0;

  // Update main image with fade animation
  function updateImage(index) {
    const $target = $thumbs.eq(index);
    const newSrc = $target.data("large");
    const newAlt = $target.data("alt");

    $thumbs.removeClass("active").attr("aria-selected", "false");
    $target.addClass("active").attr("aria-selected", "true");

    $mainImage.addClass("fade-out");
    setTimeout(() => {
      $mainImage.attr("src", newSrc).attr("alt", newAlt);
      $mainImage.removeClass("fade-out");
    }, 250);

    currentIndex = index;
  }

  // Thumbnail click
  $thumbs.on("click", function () {
    const index = $thumbs.index(this);
    updateImage(index);
  });

  // Next button
  $("#nextBtn").on("click", function () {
    let nextIndex = (currentIndex + 1) % $thumbs.length;
    updateImage(nextIndex);
  });

  // Previous button
  $("#prevBtn").on("click", function () {
    let prevIndex = (currentIndex - 1 + $thumbs.length) % $thumbs.length;
    updateImage(prevIndex);
  });
});
