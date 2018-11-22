(()=>{

    const vm = new Vue({
   el:'#app',

   data:{
    mainmessage: "welcome to my video app!",
       //how the gallery works for portfolio
     videodata:[
     {title:"some title",path:"some path",vid_thumb:"avengers.jpg"},
     {title:"some title",path:"another",vid_thumb:"forceawakens.jpg"},
     {title:"some title",path:"third",vid_thumb:"strangerthings.jpg"}

     ],

     
     singlemoviedata:[],

     videotitle:"",
     videosource:"",
     videodescription:"",
     showDetails: false

   },
  created:function(){
      this.fetchMovieData(null);

  },
  methods:{
    fetchMore(e){
        this.fetchMovieData(e.currentTarget.datasrt.movie);
    },

    loadMovie(e){
      //stub
      e.preventDefault();

      dataKey = e.currentTarget.getAttribute('href');
      currentData = this.videodata.filter(video => video.vid_path === dataKey);

      this.videotitle = currentData[0].vid_name;
      this.videodescription = currentData[0].vid_desc;
      this.videosource = dataKey;

      this.showDetails = ture;

      setTimeout(function(){window.scrollTo(0,1200); },500);

    },

    scrollBackUp(){
        window.scrollTo(0,0);
        this.showDetails =false;
        this.videosource ="";
    },
        fetchMovieData(movie){
            url = movie ? `./includes/index.php?movie=${movie}`:'./includes/index.php';

            fetch(url)
            .then(res => res.json())
            .then(data =>{
                if (movie){
                    //getting one movie so use the signle array
                    console.log(data);
                    this.singlemoviedata = data;
                }else{
                    //push all the video (or poetfolio contnet)into video array
                    this.videodata=data;
                }
            })
            .catch (function(error){
                console.log(error);
            });
        }
  }
    });

})();