const arr = [
  {
    _id: 1,
    dp: "https://img.freepik.com/free-photo/modern-woman-taking-selfie_23-2147893965.jpg?t=st=1656006802~exp=1656007402~hmac=237bd0a60c0f3bf34ee05cd05b4f1ce5b0e37189dec3dc87f335a8b05abb5871&w=740",
    image:
      "https://img.freepik.com/free-photo/closeup-portrait-attractive-hispanic-woman-with-long-braided-hair-sunbeam-her-face_181624-55504.jpg?t=st=1656005290~exp=1656005890~hmac=46b80e1522f9857765522cb0129269ce88b3822eea02f16106974811dd0ed7a9&w=360",
  },
  {
    _id: 2,
    dp: "https://img.freepik.com/free-photo/asian-woman-with-tied-hair-being-upset_23-2148255286.jpg?t=st=1656006802~exp=1656007402~hmac=f0dd6a2882cd94a25dd02851120ae9f8f07203a950caccce730af23cbf36b1f8&w=740",
    image:
      "https://img.freepik.com/free-photo/profile-shot-aristocratic-girl-blouse-with-frill-lady-with-flowers-her-hair-posing-proudly-against-blue-wall_197531-14304.jpg?w=360&t=st=1656006954~exp=1656007554~hmac=d27b025d5762626bd48863e6c6a9de42927c4615b80b4cb63ef023143aa4ce70",
  },
  {
    _id: 3,
    dp: "https://img.freepik.com/free-photo/asian-woman-posing-looking-camera_23-2148255359.jpg?t=st=1656006802~exp=1656007402~hmac=3632a37f410ec3018ebd45619b96a13a2b0dbb49c9865b93e18d1598730855be&w=740",
    image:
      "https://img.freepik.com/free-photo/portrait-young-brunette-woman-hat-closeup_1321-3589.jpg?t=st=1656005290~exp=1656005890~hmac=cab6a21bc7f13d54951cfdfa6a115b0580c2f01ff06d17847bef6083a713bba1&w=360",
  },
  {
    _id: 4,
    dp: "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?t=st=1656007084~exp=1656007684~hmac=0f8ea26c4f0b134fc80ea6e3a83a4c42d3568a1c99ed4fc3d07a3a66124bbb3f&w=740",
    image:
      "https://img.freepik.com/free-photo/elegant-young-handsome-man_1301-5870.jpg?t=st=1656005290~exp=1656005890~hmac=1d3cb1a27c23aa60fac9a94024fe22bfbe11bbf543adde11c36cbbaabc5084cf&w=360",
  },
  {
    _id: 5,
    dp: "https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?t=st=1656007084~exp=1656007684~hmac=350a50e4cf4deac10d35dc709262781482ed1527dd6f40205a81423a53f2ec23&w=740",
    image:
      "https://img.freepik.com/free-photo/vertical-shot-beautiful-smiling-woman-denim-jacket_181624-45444.jpg?t=st=1656005290~exp=1656005890~hmac=34e328de28436b29efc9b52d08c2df642133122a3df9f182bfe68579cdee8911&w=360",
  },
];

let item = "";

arr.map((elem, idx) => {
  item += `<div class="story">
            <img id="${idx}" src="${elem.dp}" alt="story" />
          </div>`;
});

document.querySelector("#closeIcon").addEventListener("click", function () {
  document.querySelector("#fullpreview").style.display = "none";
});

document.getElementById("stories").innerHTML = item;
let grow = 0;
document.querySelector("#stories").addEventListener("click", function (e) {
  document.querySelector("#fullpreview").style.display = "block";
  document.querySelector("#fullpreview").style.backgroundImage = `url(${
    arr[e.target.id].image
  })`;

  setTimeout(function () {
    document.querySelector("#fullpreview").style.display = "none";
  }, 3000);

  if (grow < 100) {
    setInterval(function () {
      document.querySelector("#growth").style.width = `${grow++}%`;
    }, 30);
  } else {
    grow = 0;
  }
});
