//JavaScript

OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.myTemplate.size = [125, 190];
OrgChart.templates.myTemplate.node = '<rect x="0" y="0" height="190" width="125" fill="#ffffff" stroke-width="1" stroke="#aeaeae" rx="5" ry="5"></rect>';
OrgChart.templates.myTemplate.field_0 = '<text data-width="100" data-text-overflow="multiline" style="font-size: 14px;font-weight: 600;" fill="#2D2D2D" x="62.5" y="85" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.field_1 = '<text data-width="110" data-text-overflow="multiline"  style="font-size: 12px;" fill="#2D2D2D" x="62.5" y="125" text-anchor="middle">{val}</text>';
OrgChart.templates.myTemplate.img_0 = '<image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="32.5" y="7"  width="60" height="60"></image>';
OrgChart.templates.myTemplate.plus = '<circle cx="15" cy="15" r="15" fill="#212529" stroke="#ffffff" stroke-width="1"></circle>'
  + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>'
  + '<line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#ffffff"></line>';
OrgChart.templates.myTemplate.minus = '<circle cx="15" cy="15" r="15" fill="#212529" stroke="#ffffff" stroke-width="1"></circle>'
  + '<line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#ffffff"></line>';



var editForm = function () {
  this.nodeId = null;
};

editForm.prototype.init = function (obj) {
  var that = this;
  this.obj = obj;
  this.editForm = document.getElementById("editForm");
  this.emailInput = document.getElementById("email");
  this.addressInput = document.getElementById("address");
  this.phone1Input = document.getElementById("phone1");
  this.phone2Input = document.getElementById("phone2");
  this.imgInput = document.getElementById("img");
  this.nameInput = document.getElementById("name");
  this.titleInput = document.getElementById("title");
  this.cancelButton = document.getElementById("close");

  this.cancelButton.addEventListener("click", function () {
    that.hide();
  });
};

editForm.prototype.show = function (nodeId) {
  this.nodeId = nodeId;

  var left = document.body.offsetWidth / 2 - 150;

  this.editForm.style.left = left + "px";
  var node = chart.get(nodeId);
  if (!node) return;
  this.emailInput.innerHTML = node.email ? node.email : "";
  this.imgInput.src = node.img ? node.img : "#";
  this.nameInput.innerHTML = node.name ? node.name : "";
  this.titleInput.innerHTML = node.title ? node.title : "";

  this.editForm.style.display = "block";

  OrgChart.animate(this.editForm, { opacity: 0 }, { opacity: 1 }, 300, OrgChart.anim.inOutSin);
};

editForm.prototype.content = function (id, detailsMode, dontAnim, width, dontRenderButtons) {
  var div = document.createElement('div');
  div.innerHTML = document.getElementById('editForm').innerHTML;
  div.innerHTML += '<style>#close{display:none !important;}</style>';
  return { element: div, focusId: '', title: '', shareText: '' };
};

editForm.prototype.hide = function (showldUpdateTheNode) {
  this.editForm.style.display = "none";
  this.editForm.style.opacity = 0;

};

var chart = new OrgChart(document.getElementById('tree'), {
  mouseScrool: OrgChart.none,
  toolbar: {
    zoom: true,
  },
  menu: {
    pdfPreview: {
      text: "PDF Preview",
      icon: OrgChart.icon.pdf(24, 24, '#7A7A7A'),
      onClick: preview
    },
    pdf: { text: "Export PDF" },
    png: { text: "Export PNG" },
    svg: { text: "Export SVG" },
    csv: { text: "Export CSV" }
  },
  nodeMenu: {
    pdf: { text: "Export PDF" },
    png: { text: "Export PNG" },
    svg: { text: "Export SVG" }
  },
  enableSearch: false,
  template: "myTemplate",
  nodeBinding: {
    field_0: "name",
    field_1: 'title',
    img_0: "img"
  },
  editUI: new editForm(),
});


chart.load([
  {
    name: 'Kashif Rafique',
    id: 'Managing Director',
    title: 'Managing Director',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/63.png',
    email: 'Kaschif@eurocentra.com.pk'
  },
  // Otto Bonprix/Limango (Home Textile)
  {
    name: 'Otto Bonprix/Limango (Home Textile)',
    id: 'Otto Bonprix/Limango (Home Textile)',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Muhammad Umer',
    id: 'Muhammad Umer',
    pid: 'Otto Bonprix/Limango (Home Textile)',
    title: 'Division Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/16.png',
    email: 'umer@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Tehreem',
    id: 'Muhammad Tehreem',
    pid: 'Muhammad Umer',
    title: 'Technical Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'sheikh1.tehrim@gmail.com'
  },
  {
    name: 'Muhammad Jamil',
    id: 'Muhammad Jamil',
    pid: 'Muhammad Tehreem',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/34.png',
    email: 'jamil-eurocentra@outlook.com'
  },
  {
    name: 'Muhammad Faisal Iqbal',
    id: 'Muhammad Faisal Iqbal',
    pid: 'Muhammad Tehreem',
    title: 'Quality Lead',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'faisalshah-eurocentra@outlook.com'
  },
  // OTTO (Home Textile)
  {
    name: 'OTTO (Home Textile)',
    id: 'OTTO (Home Textile)',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Kashif Nisar',
    id: 'Kashif Nisar',
    pid: 'OTTO (Home Textile)',
    title: 'Division Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'kashif.nisar@eurocentra.com.pk'
  },
  {
    name: 'Shahzad Mahmood',
    id: 'Shahzad Mahmood',
    pid: 'Kashif Nisar',
    title: 'Technical Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'shahzad@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Laraib',
    id: 'Muhammad Laraib',
    pid: 'Shahzad Mahmood',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'm.laraib@eurocentra.com.pk'
  },
  {
    name: 'Mohammad Danish',
    id: 'Mohammad Danish',
    pid: 'Kashif Nisar',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'danish-eurocentra@outlook.com'
  },
  // Witt Group / Limango Leather
  {
    name: 'Witt Group / Limango Leather',
    id: 'Witt Group / Limango Leather',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Kashif Ahmed Khan',
    id: 'Kashif Ahmed Khan',
    pid: 'Witt Group / Limango Leather',
    title: 'Division Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Kashifkhan@eurocentra.com.pk'
  },
  {
    name: 'Imran Shamim',
    id: 'Imran Shamim',
    pid: 'Kashif Ahmed Khan',
    title: 'Business Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'imran.shamim@eurocentra.com.pk'
  },
  {
    name: 'Jahangir Khan',
    id: 'Jahangir Khan',
    pid: 'Kashif Ahmed Khan',
    title: 'Business Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'jahangir@eurocentra.com.pk'
  },
  {
    name: 'Wahid Dabir Khan',
    id: 'Wahid Dabir Khan',
    pid: 'Kashif Ahmed Khan',
    title: 'Business Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'wahid@eurocentra.com.pk'
  },
  {
    name: 'Daniyal Bilal',
    id: 'Daniyal Bilal',
    pid: 'Imran Shamim',
    title: 'Assistant Merchandise Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'daniyal@eurocentra.com.pk'
  },
  {
    name: 'Zohaib Yousuf',
    id: 'Zohaib Yousuf',
    pid: 'Jahangir Khan',
    title: 'Assistant Merchandise Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'zohaib@eurocentra.com.pk'
  },
  {
    name: 'Naushad Ahmed',
    id: 'Naushad Ahmed',
    pid: 'Wahid Dabir Khan',
    title: 'Manager Quality Control and Assurance',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'naushad@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Arif',
    id: 'Muhammad Arif',
    pid: 'Daniyal Bilal',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Arif@eurocentra.com.pk'
  },
  {
    name: 'Syed Samar Abbas',
    id: 'Syed Samar Abbas',
    pid: 'Zohaib Yousuf',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'samar@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Haroon Khan',
    id: 'Muhammad Haroon Khan',
    pid: 'Muhammad Arif',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'haroon-ecp@outlook.com'
  },
  {
    name: 'Muhammad Aslam',
    id: 'Muhammad Aslam',
    pid: 'Muhammad Arif',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'aslam@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Faisal',
    id: 'Muhammad Faisal',
    pid: 'Muhammad Arif',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Faisal@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Irfan',
    id: 'Muhammad Irfan',
    pid: 'Syed Samar Abbas',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'irfan@eurocentra.com.pk'
  },
  {
    name: 'Rizwan Ali Khan',
    id: 'Rizwan Ali Khan',
    pid: 'Syed Samar Abbas',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'rizwank-eurocentra@outlook.com'
  },
  {
    name: 'Ashraf Akram Rakha',
    id: 'Ashraf Akram Rakha',
    pid: 'Syed Samar Abbas',
    title: 'Quality Lead (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ashraf@eurocentra.com.pk'
  },
  {
    name: 'Asif Ashraf',
    id: 'Asif Ashraf',
    pid: 'Naushad Ahmed',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'asif-eurocentra@outlook.com'
  },
  {
    name: 'Nasir Mehmood',
    id: 'Nasir Mehmood',
    pid: 'Asif Ashraf',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'nasir@eurocentra.com.pk'
  },
  // OTTO / FRANKONIA
  {
    name: 'OTTO / FRANKONIA',
    id: 'OTTO / FRANKONIA',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Albert',
    id: 'Albert',
    pid: 'OTTO / FRANKONIA',
    title: 'Division Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'a.george@eurocentra.com.pk'
  },
  {
    name: 'Syed Ahmed Ali Shah',
    id: 'Syed Ahmed Ali Shah',
    pid: 'Albert',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ahmed@eurocentra.com.pk'
  },
  {
    name: 'Adnan Bin Sultan',
    id: 'Adnan Bin Sultan',
    pid: 'Syed Ahmed Ali Shah',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'adnan-eurocentra@outlook.com'
  },
  {
    name: 'Syed Abbas Asghar',
    id: 'Syed Abbas Asghar',
    pid: 'Syed Ahmed Ali Shah',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'abbasasghar@eurocentra.com.pk'
  },
  {
    name: 'Malik Javaid Qayyum',
    id: 'Malik Javaid Qayyum',
    pid: 'Syed Ahmed Ali Shah',
    title: 'Quality Lead (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'javaid.qayyum@eurocentra.com.pk'
  },
  // BONPRIX/OTTO Fashion/Limango
  {
    name: 'BONPRIX/OTTO Fashion/Limango',
    id: 'BONPRIX/OTTO Fashion/Limango',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Umair Ahmed Siddiqui',
    id: 'Umair Ahmed Siddiqui',
    pid: 'BONPRIX/OTTO Fashion/Limango',
    title: 'Division Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/15.png',
    email: 'umair@eurocentra.com.pk'
  },
  {
    name: 'Kamran Saleem',
    id: 'Kamran Saleem',
    pid: 'Umair Ahmed Siddiqui',
    title: 'Business Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'kamran@eurocentra.com.pk'
  },
  {
    name: 'Kashif Younus',
    id: 'Kashif Younus',
    pid: 'Kamran Saleem',
    title: 'Deputy Merchandise Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/21.png',
    email: 'kashif.younus@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Zeeshan',
    id: 'Muhammad Zeeshan OTTO',
    pid: 'Kashif Younus',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/26.png',
    email: 'm.zeeshan@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Saleem Khan',
    id: 'Muhammad Saleem Khan',
    pid: 'Muhammad Zeeshan OTTO',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'saleem-eurocentra@outlook.com'
  },
  {
    name: 'Syed Zahid Ali',
    id: 'Syed Zahid Ali',
    pid: 'Muhammad Zeeshan OTTO',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'zahid-eurocentra@outlook.com'
  },
  // BONPRIX WOVEN
  {
    name: 'BONPRIX WOVEN',
    id: 'BONPRIX WOVEN',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Abdul Hafeez',
    id: 'Abdul Hafeez',
    pid: 'BONPRIX WOVEN',
    title: 'Division Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/17.png',
    email: 'abdul.hafeez@eurocentra.com.pk'
  },
  {
    name: 'Syed Amir Abbas',
    id: 'Syed Amir Abbas',
    pid: 'Abdul Hafeez',
    title: 'Assistant Merchandise Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/22.png',
    email: 'aamir.abbas@eurocentra.com.pk'
  },
  {
    name: 'Khizar Hayat',
    id: 'Khizar Hayat',
    pid: 'Syed Amir Abbas',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'm.khizar.hayyat.ecp@gmail.com'
  },
  {
    name: 'Shahzad Ansari',
    id: 'Shahzad Ansari',
    pid: 'Khizar Hayat',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/32.png',
    email: 'shahzad-eurocentra@outlook.com'
  },
  // ECI (Home Textile)
  {
    name: 'ECI (Home Textile)',
    id: 'ECI (Home Textile)',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Prince Faisal Nizami',
    id: 'Prince Faisal Nizami',
    pid: 'ECI (Home Textile)',
    title: 'Division Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'faisal.nizami@eurocentra.com.pk'
  },
  {
    name: 'Ghazal Siddiqui',
    id: 'Ghazal Siddiqui',
    pid: 'Prince Faisal Nizami',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ghazal.sidd@gmail.com'
  },
  {
    name: 'Muhammad Talha',
    id: 'Muhammad Talha',
    pid: 'Ghazal Siddiqui',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'talha@eurocentra.com.pk'
  },
  {
    name: 'Syed Usman Ahmed Rizvi',
    id: 'Syed Usman Ahmed Rizvi',
    pid: 'Muhammad Talha',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'usman@eurocentra.com.pk'
  },
  {
    name: 'Habib Ahmed',
    id: 'Habib Ahmed',
    pid: 'Syed Usman Ahmed Rizvi',
    title: 'Technical Lead',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'habib@eurocentra.com.pk'
  },
  {
    name: 'Kamran Ali Abid',
    id: 'Kamran Ali Abid',
    pid: 'Habib Ahmed',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'kamranaliabid941@gmail.com'
  },
  {
    name: 'Jawed',
    id: 'Jawed',
    pid: 'Habib Ahmed',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'jawedayub666@gmail.com.pk'
  },
  {
    name: 'Nosherwan Tahir',
    id: 'Nosherwan Tahir',
    pid: 'Habib Ahmed',
    title: 'Quality Lead (FSD)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'nosherwan@eurocentra.com.pk'
  },
  // ECI (Non-Textile Division)
  {
    name: 'ECI (Non-Textile Division)',
    id: 'ECI (Non-Textile Division)',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Mustafa Akram',
    id: 'Mustafa Akram',
    pid: 'ECI (Non-Textile Division)',
    title: 'Division Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'g.mustafa@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Atif',
    id: 'Muhammad Atif',
    pid: 'Mustafa Akram',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'atif@eurocentra.com.pk'
  },
  {
    name: 'Rao Kamran Ahmed',
    id: 'Rao Kamran Ahmed',
    pid: 'Muhammad Atif',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'raokamranahmed@gmail.com'
  },
  {
    name: 'Atif Zaheer',
    id: 'Atif Zaheer',
    pid: 'Muhammad Atif',
    title: 'Quality Lead (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'mirzaatifzaheer@gmail.com'
  },
  {
    name: 'Zeeshan Haider',
    id: 'Zeeshan Haider',
    pid: 'Muhammad Atif',
    title: 'Quality Lead (SKT)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'zeeshan.haider@eurocentra.com.pk'
  },
  // ECI KNITWEAR
  {
    name: 'ECI KNITWEAR',
    id: 'ECI KNITWEAR',
    pid: 'ECI (Non-Textile Division)',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Shahid Ali Shoukat',
    id: 'Shahid Ali Shoukat',
    pid: 'ECI KNITWEAR',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'shahid@eurocentra.com.pk'
  },
  {
    name: 'Fahad Majeed',
    id: 'Fahad Majeed',
    pid: 'Shahid Ali Shoukat',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'fahad@eurocentra.com.pk'
  },
  {
    name: 'Basit Ali',
    id: 'Basit Ali',
    pid: 'Fahad Majeed',
    title: 'CSR Executive',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/18.png',
    email: 'basit.ali@eurocentra.com.pk'
  },
  {
    name: 'Wanhar Mushtaq',
    id: 'Wanhar Mushtaq',
    pid: 'Basit Ali',
    title: 'Technical Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'wanhar@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Atif Khan',
    id: 'Muhammad Atif Khan',
    pid: 'Wanhar Mushtaq',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'atifkhan-eurocentra@outlook.com'
  },
  {
    name: 'Ayaz ul Hassan',
    id: 'Ayaz ul Hassan',
    pid: 'Muhammad Atif Khan',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ayaz-eurocentra@outlook.com'
  },
  {
    name: 'Muhammad Imran',
    id: 'Muhammad Imran',
    pid: 'Wanhar Mushtaq',
    title: 'Quality Lead (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'muhammadimran4561@outlook.com'
  },
  // ECI WOVEN
  {
    name: 'ECI WOVEN',
    id: 'ECI WOVEN',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Owais Muhammad',
    id: 'Owais Muhammad',
    pid: 'ECI WOVEN',
    title: 'Division Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'm.owais@eurocentra.com.pk'
  },
  {
    name: 'Hadi Saleem',
    id: 'Hadi Saleem',
    pid: 'Owais Muhammad',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'hadi@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Zeeshan',
    id: 'Muhammad Zeeshan',
    pid: 'Hadi Saleem',
    title: 'Deputy Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'zeeshan.khan@eurocentra.com.pk'
  },
  {
    name: 'Syed Wajahat',
    id: 'Syed Wajahat',
    pid: 'Hadi Saleem',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'wajahat@eurocentra.com.pk'
  },
  {
    name: 'Abdul Rafay Khan',
    id: 'Abdul Rafay Khan',
    pid: 'Syed Wajahat',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Abdulrafay@eurocentra.com.pk'
  },
  {
    name: 'Usman Naveed',
    id: 'Usman Naveed',
    pid: 'Abdul Rafay Khan',
    title: 'Assistant Merchandising Executive',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'usman.naveed@eurocentra.com.pk'
  },
  {
    name: 'Syed Shandar Mehdi',
    id: 'Syed Shandar Mehdi',
    pid: 'Usman Naveed',
    title: 'Technical Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Shandar@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Tanveer',
    id: 'Muhammad Tanveer',
    pid: 'Usman Naveed',
    title: 'Technical Lead (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'tanveer@eurocentra.com.pk'
  },
  {
    name: 'Ghazanfar Adeel',
    id: 'Ghazanfar Adeel',
    pid: 'Syed Shandar Mehdi',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ghazanfer-eurocentra@outlook.com'
  },
  {
    name: 'Syed Asif Karim',
    id: 'Syed Asif Karim',
    pid: 'Syed Shandar Mehdi',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'asifkareem1978@gmail.com'
  },
  {
    name: 'Rizwan Ali Attray',
    id: 'Rizwan Ali Attray',
    pid: 'Muhammad Tanveer',
    title: 'Quality Lead (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'rizwan@eurocentra.com.pk'
  },
  // ECI Sfera
  {
    name: 'ECI Sfera',
    id: 'ECI Sfera',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Haseeb-ul-Haq Siddiqui',
    id: 'Haseeb-ul-Haq Siddiqui',
    pid: 'ECI Sfera',
    title: 'Division Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'haseeb@eurocentra.com.pk'
  },
  {
    name: 'Syed Farhan Haider Rizvi',
    id: 'Syed Farhan Haider Rizvi',
    pid: 'Haseeb-ul-Haq Siddiqui',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'farhan@eurocentra.com.pk'
  },
  {
    name: 'Rana Husnain Nawaz',
    id: 'Rana Husnain Nawaz',
    pid: 'Haseeb-ul-Haq Siddiqui',
    title: 'Assistant Merchandising Manager (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'hussnain.ntu31@gmail.com'
  },
  {
    name: 'Waqas Ahmad',
    id: 'Waqas Ahmad',
    pid: 'Haseeb-ul-Haq Siddiqui',
    title: 'Assistant Merchandising Manager (FSD)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Waqas.ahmed@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Rizwan',
    id: 'Muhammad Rizwan',
    pid: 'Syed Farhan Haider Rizvi',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'rizwan-eurocentra@outlook.com'
  },
  {
    name: 'Alam Hussain',
    id: 'Alam Hussain',
    pid: 'Rana Husnain Nawaz',
    title: 'Quality Lead (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'aaalam1978@gmail.com'
  },
  {
    name: 'Usman Khalid',
    id: 'Usman Khalid',
    pid: 'Waqas Ahmad',
    title: 'Quality Lead (FSD)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'usman.khalid@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Ali Murtaza',
    id: 'Muhammad Ali Murtaza',
    pid: 'Waqas Ahmad',
    title: 'Quality Lead (FSD)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ali.murtaza@eurocentra.com.pk'
  },
  // Ernstings Family
  {
    name: 'Ernstings Family',
    id: 'Ernstings Family',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Zeeshan Rana',
    id: 'Zeeshan Rana',
    pid: 'Ernstings Family',
    title: 'Division Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Zeeshan@eurocentra.com.pk'
  },
  {
    name: 'Azhar Abbas',
    id: 'Azhar Abbas',
    pid: 'Zeeshan Rana',
    title: 'Assistant Merchandising Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'azhar@eurocentra.com.pk'
  },
  {
    name: 'Usama Hassan',
    id: 'Usama Hassan',
    pid: 'Zeeshan Rana',
    title: 'Assistant Merchandising Manager (FSD)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'USAMA@eurocentra.com.pk'
  },
  {
    name: 'Ali Akbar',
    id: 'Ali Akbar',
    pid: 'Zeeshan Rana',
    title: 'Assistant Merchandising Manager (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Ali.akber@eurocentra.com.pk'
  },
  {
    name: 'Mujahid Hussain',
    id: 'Mujahid Hussain',
    pid: 'Usama Hassan',
    title: 'Technical Lead (FSD)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'mujahid@eurocentra.com.pk'
  },
  {
    name: 'Saeed Hassan',
    id: 'Saeed Hassan',
    pid: 'Ali Akbar',
    title: 'Technical Lead (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'saeedhassan@eurocentra.com.pk'
  },
  {
    name: 'Adnan Iqbal',
    id: 'Adnan Iqbal',
    pid: 'Azhar Abbas',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'adnan@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Junaid',
    id: 'Muhammad Junaid',
    pid: 'Mujahid Hussain',
    title: 'Quality Lead (FSD)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'm.junaid@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Kashif',
    id: 'Muhammad Kashif',
    pid: 'Saeed Hassan',
    title: 'Quality Lead (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'kkasisandhu@gmail.com'
  },
  // IBENA
  {
    name: 'IBENA',
    id: 'IBENA',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Imran Ghani Khan',
    id: 'Imran Ghani Khan',
    pid: 'IBENA',
    title: 'Division Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Imran.ghani@eurocentra.com.pk'
  },
  {
    name: 'Umair Rabbani',
    id: 'Umair Rabbani',
    pid: 'Imran Ghani Khan',
    title: 'Quality Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'umair-eurocentra@outlook.com'
  },


  // Quality Start
  {
    name: 'Quality Control and Chemical Testing',
    id: 'quality',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Rana Sohaib Mustafa',
    id: 'Rana Sohaib Mustafa',
    pid: 'quality',
    title: 'Divison Head',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/2.png',
    email: 'Sohaib@eurocentra.com.pk'
  },
  {
    name: 'Faheem Shahzad',
    id: 'Faheem Shahzad',
    pid: 'Rana Sohaib Mustafa',
    title: 'RQM Quality Control and Assurance',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'faheem@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Asim',
    id: 'Muhammad Asim',
    pid: 'Faheem Shahzad',
    title: 'Manager Quality Control and Assurance',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/13.png',
    email: 'asim@eurocentra.com.pk'
  },
  {
    name: 'Ali Anwar',
    id: 'Ali Anwar',
    pid: 'Muhammad Asim',
    title: 'Manager Quality Control and Assurance',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ali@eurocentra.com.pk'
  },
  {
    name: 'Imran Amjad',
    id: 'Imran Amjad',
    pid: 'Ali Anwar',
    title: 'Manager Quality Control and Assurance (FSD)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/25.png',
    email: 'imran.amjad@eurocentra.com.pk'
  },
  {
    name: 'Syed Zuhair Hassan',
    id: 'Syed Zuhair Hassan',
    pid: 'Imran Amjad',
    title: 'Processing Lead (KHI) IN LINER',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'zuhair-eurocentra@outlook.com'
  },
  {
    name: 'Sajid',
    id: 'Sajid',
    pid: 'Syed Zuhair Hassan',
    title: 'Processing Lead (KHI) IN LINER',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'sajidnawazkhaskheli@gmail.com'
  },
  {
    name: 'Roban Raza',
    id: 'Roban Raza',
    pid: 'Sajid',
    title: 'Processing Lead (KHI) IN LINER',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'robanraza@gmail.com'
  },
  {
    name: 'Muhammad Nadir Khan',
    id: 'Muhammad Nadir Khan',
    pid: 'Roban Raza',
    title: 'Manufacturing Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'nadir.zai-eurocentra@outlook.com'
  },
  {
    name: 'Muhammad Ali',
    id: 'Muhammad Ali',
    pid: 'Muhammad Nadir Khan',
    title: 'Manufacturing Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ali-eurocentra@outlook.com'
  },
  {
    name: 'Mansoor Ali',
    id: 'Mansoor Ali',
    pid: 'Muhammad Ali',
    title: 'Manufacturing Lead (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'mansoor.ali-eurocentra@outlook.com'
  },
  {
    name: 'Muhammad Qasim',
    id: 'Muhammad Qasim',
    pid: 'Mansoor Ali',
    title: 'Manufacturing Lead (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'qasim@eurocentra.com.pk'
  },
  {
    name: 'Faisal Iqbal',
    id: 'Faisal Iqbal',
    pid: 'Muhammad Qasim',
    title: 'Processing Lead (KHI) IN LINER',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/35.png',
    email: 'mfaisal-eurocentra@outlook.com'
  },
  {
    name: 'Tauqeer Ahmad',
    id: 'Tauqeer Ahmad',
    pid: 'Faisal Iqbal',
    title: 'Processing Lead (KHI) IN LINER',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'touqeer.ahmed@eurocentra.com.pk'
  },
  {
    name: 'Syed Uraish Ali',
    id: 'Syed Uraish Ali',
    pid: 'Tauqeer Ahmad',
    title: 'Facility Officer',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'na@eurocentra.com.pk'
  },
  // 
  {
    name: 'Muhammad Ismail',
    id: 'Muhammad Ismail',
    pid: 'Rana Sohaib Mustafa',
    title: 'Chemical Testing Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/17.png',
    email: 'ismail@eurocentra.com.pk'
  },
  {
    name: 'Dania Jamil',
    id: 'Dania Jamil',
    pid: 'Muhammad Ismail',
    title: 'Textile Testing Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/31.png',
    email: 'dania@eurocentra.com.pk'
  },
  {
    name: 'Mueez Ahmad Khan',
    id: 'Mueez Ahmad Khan',
    pid: 'Dania Jamil',
    title: 'Asistant Manager Textile Testing (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Mueez@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Owais Khan',
    id: 'Muhammad Owais Khan',
    pid: 'Mueez Ahmad Khan',
    title: 'Testing Executive',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/59.png',
    email: 'owais@eurocentra.com.pk'
  },
  {
    name: 'Danish Paracha',
    id: 'Danish Paracha',
    pid: 'Muhammad Owais Khan',
    title: 'Deputy Product Manager (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Danishparacha@eurocentra.com.pk'
  },
  {
    name: 'Ahmed Adeel Zia',
    id: 'Ahmed Adeel Zia',
    pid: 'Danish Paracha',
    title: 'Manfacturing Excellence Manager+CSR',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ahmed.adeel@eurocentra.com.pk'
  },
  {
    name: 'Fahad Ali Shahzad',
    id: 'Fahad Ali Shahzad',
    pid: 'Ahmed Adeel Zia',
    title: 'CSR Executive (LHE & SKT)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'fahad.ali@eurocentra.com.pk'
  },
  {
    name: 'Jameel Ahmed',
    id: 'Jameel Ahmed',
    pid: 'Fahad Ali Shahzad',
    title: 'Digita;izatioin / Accord Project Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/10.png',
    email: 'Jameel@eurocentra.com.pk'
  },
  // ECP SERVICES
  {
    name: 'ECP SERVICES',
    id: 'ECP SERVICES',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Zahid Sajjad',
    id: 'Zahid Sajjad',
    pid: 'ECP SERVICES',
    title: 'Department Manager ECP Services',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/zs.png',
    email: 'zahid@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Aamir Sami',
    id: 'Muhammad Aamir Sami',
    pid: 'Zahid Sajjad',
    title: 'MIS Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'aamir@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Hammad',
    id: 'Muhammad Hammad',
    pid: 'Muhammad Aamir Sami',
    title: 'Sr. Quality Executive (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'hammad@eurocentra.com.pk'
  },
  {
    name: 'Noman Naseem',
    id: 'Noman Naseem',
    pid: 'Muhammad Hammad',
    title: 'Sr. Quality Executive (KHI)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/8.png',
    email: 'noman@eurocentra.com.pk'
  },
  {
    name: 'Syed Hassam Ali Gilani',
    id: 'Syed Hassam Ali Gilani',
    pid: 'Noman Naseem',
    title: 'Quality Executive (FSD)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'hassam@eurocentra.com.pk'
  },
  {
    name: 'Hassan Ishtiaq',
    id: 'Hassan Ishtiaq',
    pid: 'Syed Hassam Ali Gilani',
    title: 'Quality Executive (LHR)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'hassan@eurocentra.com.pk'
  },
  {
    name: 'Sadad Ali',
    id: 'Sadad Ali',
    pid: 'Hassan Ishtiaq',
    title: 'MIS Executive',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/19.png',
    email: 'sadad@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Ijlal',
    id: 'Muhammad Ijlal',
    pid: 'Sadad Ali',
    title: 'MIS Executive',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ijlal@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Safwan Khan',
    id: 'Muhammad Safwan Khan',
    pid: 'Muhammad Ijlal',
    title: 'HR Assistant',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/6.png',
    email: 'hreurocentra@outlook.com'
  },
  {
    name: 'Sikandar Ali',
    id: 'Sikandar Ali',
    pid: 'Muhammad Safwan Khan',
    title: 'Sr Librarian',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'sikandar@eurocentra.com.pk'
  },
  {
    name: 'Shahryar Ahmed',
    id: 'Shahryar Ahmed',
    pid: 'Sikandar Ali',
    title: 'Librarian',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'na@eurocentra.com.pk'
  },
  {
    name: 'Grephen Almas',
    id: 'Grephen Almas',
    pid: 'Shahryar Ahmed',
    title: 'Logistics Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/12.png',
    email: 'grephen@eurocentra.com.pk'
  },
  {
    name: 'Mehreen Idrees',
    id: 'Mehreen Idrees',
    pid: 'Grephen Almas',
    title: 'Assistant Logistics Manager (German)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/20.png',
    email: 'mehreen@eurocentra.com.pk'
  },
  {
    name: 'Owais Nasir',
    id: 'Owais Nasir',
    pid: 'Mehreen Idrees',
    title: 'Logistics Executive (German)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'owais.nasir@eurocentra.com.pk'
  },
  {
    name: 'Abdul Wahid',
    id: 'Abdul Wahid',
    pid: 'Owais Nasir',
    title: 'Assistant Logistics Manager (German)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'a.wahid@eurocentra.com.pk'
  },
  {
    name: 'Irfan Ahmed Khan Baloch',
    id: 'Irfan Ahmed Khan Baloch',
    pid: 'Abdul Wahid',
    title: 'Deputy Logistics Manager (Spanish)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'irfan.ahmed@eurocentra.com.pk'
  },
  {
    name: 'Muhammad Kashif Khan',
    id: 'Muhammad Kashif Khan',
    pid: 'Irfan Ahmed Khan Baloch',
    title: 'Assistant Logistics Manager  (Spanish)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Kashif.khan@eurocentra.com.pk'
  },
  {
    name: 'Khalid Imran',
    id: 'Khalid Imran',
    pid: 'Muhammad Kashif Khan',
    title: 'Logistics Executive  (Spanish)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'khalid@eurocentra.com.pk'
  },
  // Supply Chain Management
  {
    name: 'Supply Chain Management',
    id: 'Supply Chain Management',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/tech.png',
    email: ''
  },
  {
    name: 'Abdul Saboor',
    id: 'Abdul Saboor',
    pid: 'Supply Chain Management',
    title: 'Head of Department (Supply Chain)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/4.png',
    email: 'abdul.saboor@eurocentra.com.pk'
  },
  {
    name: 'Rashna Munawar',
    id: 'Rashna Munawar',
    pid: 'Abdul Saboor',
    title: 'Deputy Manager Strategic Sourcing',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'rashna@eurocentra.com.pk'
  },
  {
    name: 'Absar Ali',
    id: 'Absar Ali',
    pid: 'Rashna Munawar',
    title: 'Deputy Manager Strategic Sourcing',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'ali-eurocentra@outlook.com'
  },
  {
    name: 'Mehwish Sheikh',
    id: 'Mehwish Sheikh',
    pid: 'Absar Ali',
    title: 'Sourcing Officer',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'mehwish@eurocentra.com.pk'
  },
  {
    name: 'Sana Zahid',
    id: 'Sana Zahid',
    pid: 'Mehwish Sheikh',
    title: 'Assistant Sourcing Manager (FSD)',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/7.png',
    email: 'Sana@eurocentra.com.pk'
  },
  // OSG Start
  {
    name: 'Operational Support Group (OSG)',
    id: 'OSG',
    pid: 'Managing Director',
    title: '',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/osg.png',
    email: ''
  },
  {
    name: 'Madni Khan',
    id: 'Madni Khan',
    pid: 'OSG',
    title: 'Manager Finance & Corporate Governance',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/5.png',
    email: 'Madni@eurocentra.com.pk'
  },
  {
    name: 'Sajjad Hussain',
    id: 'Sajjad Hussain',
    pid: 'Madni Khan',
    title: 'Associate Finance & IT Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/56.png',
    email: 'it@eurocentra.com.pk'
  },
  {
    name: 'Abdul Manan',
    id: 'Abdul Manan',
    pid: 'Sajjad Hussain',
    title: 'Facility Services Manager',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/57.png',
    email: 'abdulmanan@eurocentra.com.pk'
  },
  {
    name: 'Naseem',
    id: 'Naseem',
    pid: 'Abdul Manan',
    title: 'Assistant Manager Facility Services',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'naseem@eurocentra.com.pk'
  },
  {
    name: 'Pervez Ahmed',
    id: 'Pervez Ahmed',
    pid: 'Naseem',
    title: 'Front Desk Executive',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/55.png',
    email: 'perwaz@eurocentra.com.pk'
  },
  {
    name: 'Humayyon Khan',
    id: 'Humayyon Khan',
    pid: 'Pervez Ahmed',
    title: 'Operations Executive',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Irfan',
    id: 'Irfan',
    pid: 'Humayyon Khan',
    title: 'Facility Officer',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Naeem',
    id: 'Naeem',
    pid: 'Irfan',
    title: 'Facility Officer',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Fakhar Jahan',
    id: 'Fakhar Jahan',
    pid: 'Naeem',
    title: 'Facility Officer',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Muhammad Saqib',
    id: 'Muhammad Saqib',
    pid: 'Fakhar Jahan',
    title: 'Facility Officer',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Sardar Naeem',
    id: 'Sardar Naeem',
    pid: 'Muhammad Saqib',
    title: 'Operations Executive',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Muhammad Aqib',
    id: 'Muhammad Aqib',
    pid: 'Sardar Naeem',
    title: 'Facility Officer',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Danish Mahmood',
    id: 'Danish Mahmood',
    pid: 'Muhammad Aqib',
    title: 'Facility Officer',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Samoon',
    id: 'Samoon',
    pid: 'Danish Mahmood',
    title: 'Night Guard',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Muhammad Arif',
    id: 'Muhammad Arif osg',
    pid: 'Samoon',
    title: 'Facility Officer',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },


  {
    name: 'Javaid',
    id: 'Javaid',
    pid: 'Muhammad Arif osg',
    title: 'Chauffeur / Driver',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Javaid@eurocentra.com.pk'
  },
  {
    name: 'Saquib Hussain',
    id: 'Saquib Hussain',
    pid: 'Javaid',
    title: 'Chauffeur / Driver',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Muhammad Shakeel',
    id: 'Muhammad Shakeel',
    pid: 'Saquib Hussain',
    title: 'Chauffeur / Driver',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Fareed Ghani',
    id: 'Fareed Ghani',
    pid: 'Muhammad Shakeel',
    title: 'Chauffeur / Driver',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Munir Ahmed Shahzad',
    id: 'Munir Ahmed Shahzad',
    pid: 'Fareed Ghani',
    title: 'Chauffeur / Driver',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Muhammad Riaz Shahid',
    id: 'Muhammad Riaz Shahid',
    pid: 'Munir Ahmed Shahzad',
    title: 'Chauffeur / Driver',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Muhammad Jalil',
    id: 'Muhammad Jalil',
    pid: 'Muhammad Riaz Shahid',
    title: 'Chauffeur / Driver',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Zohaib',
    id: 'Zohaib',
    pid: 'Muhammad Jalil',
    title: 'Manufacturing Lead',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: 'Zohaib@eurocentra.com.pk'
  },
  {
    name: 'Sadiq Hussain',
    id: 'Sadiq Hussain',
    pid: 'Zohaib',
    title: 'Gardner',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Syed Zafar Hussain Shah',
    id: 'Syed Zafar Hussain Shah',
    pid: 'Sadiq Hussain',
    title: 'Gardner',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Morris Masih',
    id: 'Morris Masih',
    pid: 'Syed Zafar Hussain Shah',
    title: 'Sweeper',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Mehar',
    id: 'Mehar',
    pid: 'Morris Masih',
    title: 'Night Guard',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },
  {
    name: 'Hafiz Usman',
    id: 'Hafiz Usman',
    pid: 'Mehar',
    title: 'Guard',
    img: 'https://eurocentra.github.io/BPXAssets/assets/images/Color/no-image.png',
    email: ''
  },

]);



document.getElementById('editForm').addEventListener('click', function (e) {
  e.preventDefault();
  chart.editUI.hide();
})

function preview() {
  OrgChart.pdfPrevUI.show(chart, {
    format: 'A4'
  });
}