const GlobalStyles = () => {
  return (
    <style>
      {`
        *{
          margin:0;
          padding:0;
          box-sizing:border-box;
        }

        body{
          background:#0f1117;
          color:white;
          font-family:Arial, sans-serif;
        }

        button{
          cursor:pointer;
          border:none;
        }

        input{
          outline:none;
          border:none;
        }

        .auth-page{
          min-height:100vh;
          display:flex;
          justify-content:center;
          align-items:center;
          padding:20px;
        }

        .auth-card{
          width:100%;
          max-width:400px;
          background:#1a1d29;
          padding:40px;
          border-radius:20px;
          display:flex;
          flex-direction:column;
          gap:15px;
          box-shadow:0 0 20px rgba(0,0,0,0.4);
        }

        .auth-card h1{
          text-align:center;
          margin-bottom:10px;
          color:#ff3d71;
        }

        .auth-card input{
          padding:14px;
          border-radius:10px;
          background:#2a2f45;
          color:white;
          font-size:16px;
        }

        .auth-card button{
          padding:14px;
          border-radius:10px;
          background:#ff3d71;
          color:white;
          font-size:16px;
          font-weight:bold;
        }

        .auth-card p{
          text-align:center;
          color:#999;
          cursor:pointer;
        }

        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          padding:20px 40px;
          background:#151823;
          border-bottom:1px solid #2d3348;
        }

        .navbar h2{
          color:#ff3d71;
          cursor:pointer;
        }

        .navbar div{
          display:flex;
          gap:10px;
        }

        .navbar button{
          background:#2a2f45;
          color:white;
          padding:10px 18px;
          border-radius:8px;
        }
.navbar{
  position:sticky;
  top:0;
  z-index:1000;
  backdrop-filter:blur(10px);
  background:rgba(21,24,35,0.9);
}

.navbar h2{
  font-size:28px;
  font-weight:bold;
  letter-spacing:1px;
}

.nav-links{
  display:flex;
  gap:12px;
}

        .home-page,
        .movies-page,
        .genres-page,
        .search-page,
        .profile-page{
          padding:30px;
        }

        .movie-grid{
          margin-top:20px;
          display:grid;
          grid-template-columns:repeat(auto-fill,minmax(220px,1fr));
          gap:20px;
        }

        .movie-card{
          background:#1a1d29;
          border-radius:15px;
          overflow:hidden;
          cursor:pointer;
          transition:0.3s;
        }

        .movie-card:hover{
          transform:translateY(-5px);
        }

        .movie-card img{
          width:100%;
          height:320px;
          object-fit:cover;
        }

        .movie-info{
          padding:15px;
        }

        .movie-info h3{
          margin-bottom:10px;
          font-size:18px;
        }

        .movie-detail-page{
          padding:40px;
          display:flex;
          gap:30px;
        }

        .movie-detail-page img{
          width:300px;
          border-radius:20px;
        }

        .profile-card{
          background:#1a1d29;
          padding:30px;
          border-radius:20px;
          margin-top:20px;
        }

        .genres{
          display:flex;
          flex-wrap:wrap;
          gap:10px;
          margin-top:20px;
        }

        .genres button{
          background:#2a2f45;
          color:white;
          padding:10px 15px;
          border-radius:8px;
        }
.nav-links button{
  background:#2a2f45;
  color:white;
  padding:10px 18px;
  border-radius:8px;
  transition:0.3s;
  font-weight:500;
}

.nav-links button:hover{
  background:#ff3d71;
  transform:translateY(-2px);
}

.movie-info button{
  width:100%;
  margin-top:15px;
  padding:12px;
  border:none;
  border-radius:10px;
  background:#ff3d71;
  color:white;
  font-size:15px;
  font-weight:bold;
  cursor:pointer;
  transition:0.3s;
}

.movie-info button:hover{
  background:#ff1f5a;
  transform:translateY(-2px);
  box-shadow:0 8px 20px rgba(255,61,113,0.4);
}

.movie-info button:active{
  transform:scale(0.98);
}

.movie-detail-info button{
  margin-top:20px;
  padding:14px 28px;
  border:none;
  border-radius:12px;
  background:#ff3d71;
  color:white;
  font-size:16px;
  font-weight:bold;
  cursor:pointer;
  transition:0.3s;
}

.movie-detail-info button:hover{
  background:#ff1f5a;
  transform:translateY(-3px);
  box-shadow:0 10px 25px rgba(255,61,113,0.5);
}

.movie-detail-info button:active{
  transform:scale(0.97);
}

.nav-links button:nth-child(4):hover{
  transform:scale(1.05);
}

.skeleton-grid{
  display:grid;
  grid-template-columns:
    repeat(auto-fill,minmax(220px,1fr));

  gap:20px;
  padding:20px 0;
}

.skeleton-card{
  background:#1a1d29;
  border-radius:15px;
  overflow:hidden;
  animation:pulse 1.5s infinite;
}

.skeleton-image{
  width:100%;
  height:320px;
  background:#2a2f45;
}

.skeleton-content{
  padding:15px;
}

.skeleton-title{
  width:80%;
  height:20px;
  background:#2a2f45;
  border-radius:5px;
  margin-bottom:15px;
}

.skeleton-text{
  width:50%;
  height:15px;
  background:#2a2f45;
  border-radius:5px;
  margin-bottom:20px;
}

.skeleton-btn{
  width:100%;
  height:45px;
  background:#2a2f45;
  border-radius:10px;
}

@keyframes pulse{
  0%{
    opacity:0.5;
  }

  50%{
    opacity:1;
  }

  100%{
    opacity:0.5;
  }
}

.profile-page{
  padding:30px;
}

.profile-card{
  background:#1a1d29;
  padding:40px;
  border-radius:20px;
}

.profile-top{
  display:flex;
  align-items:center;
  gap:20px;
  margin-bottom:40px;
}

.avatar{
  width:90px;
  height:90px;
  border-radius:50%;
  background:#ff3d71;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:35px;
  font-weight:bold;
}

.profile-stats{
  display:grid;
  grid-template-columns:
    repeat(auto-fit,minmax(200px,1fr));

  gap:20px;
}

.stat-box{
  background:#2a2f45;
  padding:25px;
  border-radius:15px;
  text-align:center;
}

.stat-box h2{
  margin-bottom:10px;
}
.stat-box h2{
  font-size:28px;
  color:#ff3d71;
}
.stat-box p{
  color:#ccc;
}

.search-page{
  padding:30px;
}

/* PROFILE PAGE */

.profile-page{
  padding:30px;
}

.profile-card{
  background:#1a1d29;
  border-radius:20px;
  padding:40px;
  box-shadow:0 10px 25px rgba(0,0,0,0.3);
}

.profile-top{
  display:flex;
  align-items:center;
  gap:20px;
  margin-bottom:40px;
}

.avatar{
  width:90px;
  height:90px;
  border-radius:50%;
  background:#ff3d71;
  display:flex;
  justify-content:center;
  align-items:center;
  font-size:35px;
  font-weight:bold;
  color:white;
}

.profile-top h1{
  margin-bottom:8px;
}

.profile-top p{
  color:#aaa;
}

.profile-stats{
  display:grid;
  grid-template-columns:
    repeat(auto-fit,minmax(200px,1fr));

  gap:20px;
}

.stat-box{
  background:#2a2f45;
  padding:25px;
  border-radius:15px;
  text-align:center;
  transition:0.3s;
}

.stat-box:hover{
  transform:translateY(-5px);
}

.stat-box h2{
  font-size:28px;
  margin-bottom:10px;
  color:#ff3d71;
}

.stat-box p{
  color:#ccc;
}

/* SECTION TITLE */

.section-title{
  margin-bottom:25px;
}

.section-title h1{
  font-size:35px;
  margin-bottom:10px;
}

.section-title p{
  color:#aaa;
}

.movies-page{
  padding:30px;
}

/* GENRES PAGE */

.genres-page{
  padding:30px;
}

.genres{
  display:flex;
  flex-wrap:wrap;
  gap:12px;
  margin:25px 0;
}

.genres button{
  padding:12px 20px;
  border:none;
  border-radius:10px;
  background:#2a2f45;
  color:white;
  cursor:pointer;
  transition:0.3s;
  font-weight:500;
}

.genres button:hover{
  background:#ff3d71;
  transform:translateY(-2px);
}

/* MOVIE DETAIL PAGE */

.movie-detail-page{
  padding:40px;
  display:flex;
  gap:40px;
  align-items:flex-start;
}

.movie-detail-page img{
  width:320px;
  border-radius:20px;
  box-shadow:0 10px 30px rgba(0,0,0,0.4);
}

.movie-detail-info{
  flex:1;
}

.movie-detail-info h1{
  font-size:45px;
  margin-bottom:20px;
}

.movie-detail-info p{
  line-height:1.7;
  color:#ddd;
  margin-bottom:20px;
}

.movie-detail-info h3{
  margin-bottom:20px;
  color:#ff3d71;
}

/* MOVIE CARD */

.movie-card{
  background:#1a1d29;
  border-radius:18px;
  overflow:hidden;
  transition:0.3s;
  cursor:pointer;
}

.movie-card:hover{
  transform:translateY(-8px);
  box-shadow:0 10px 25px rgba(0,0,0,0.5);
}

.movie-card img{
  width:100%;
  height:320px;
  object-fit:cover;
}

.movie-info{
  padding:18px;
}

.movie-info h3{
  margin-bottom:12px;
  font-size:18px;
}

.movie-info p{
  color:#ccc;
}

/* MOVIE GRID */

.movie-grid{
  display:grid;
  grid-template-columns:
    repeat(auto-fill,minmax(220px,1fr));

  gap:25px;
}

/* NAVBAR SEARCH */

.nav-search{
  display:flex;
  gap:10px;
}

.nav-search input{
  padding:12px 15px;
  border:none;
  border-radius:10px;
  background:#2a2f45;
  color:white;
  width:220px;
}

/* RESPONSIVE */

@media(max-width:768px){

  .movie-detail-page{
    flex-direction:column;
  }

  .movie-detail-page img{
    width:100%;
  }

  .movie-detail-info h1{
    font-size:32px;
  }

  .nav-search{
    width:100%;
    flex-direction:column;
  }

  .nav-search input{
    width:100%;
  }

  .movie-grid{
    grid-template-columns:
      repeat(auto-fill,minmax(160px,1fr));
  }

  .movie-card img{
    height:250px;
  }
}

/* RESPONSIVE */

@media(max-width:768px){

  .profile-top{
    flex-direction:column;
    text-align:center;
  }

  .profile-card{
    padding:25px;
  }

  .section-title h1{
    font-size:28px;
  }
}
         @media (max-width:768px){  
            .movie-detail-page{
                flex-direction:column;  
                align-items:center;
            }


          
      `}
    </style>
  );
};

export default GlobalStyles;