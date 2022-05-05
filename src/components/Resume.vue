<template>
  <div class="resume">
    <h1>My Resume</h1>
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="main-timeline">
            <div class="timeline">
              <h3 class="lh">Education</h3>
              <div class="timeline-content">
                <div class="timeline-step"><span>2020</span>12</div>
                <h3 class="title">National senior certificate</h3>
                <p class="description">
                  I completed my matric in 2020 at Claremont High School. My
                  subject coices were Physics, Pure Math, Accounting, Geography,
                  English, Afrikaans and Life Orientation.
                </p>
              </div>
            </div>
            <div class="timeline">
              <h3 class="rh">Work</h3>
              <div href="#" class="timeline-content">
                <div class="timeline-step"><span>2021</span>01</div>
                <h3 class="title">Catering</h3>
                <p class="description">
                  I worked at a catering company called AA catering during the
                  December holidays and for the first two months of 2021.
                </p>
              </div>
            </div>
            <div class="timeline">
              <h3 class="lh">Education</h3>
              <div class="timeline-content">
                <div class="timeline-step"><span>2021</span>05</div>
                <h3 class="title">Drone Aviation</h3>
                <p class="description">
                  I studied and completed my drone aviation course from May to
                  July and obtained my drone pilot licence.
                </p>
              </div>
            </div>
            <div class="timeline">
              <h3 class="rh">Work</h3>
              <div href="#" class="timeline-content">
                <div class="timeline-step"><span>2021</span>07</div>
                <h3 class="title">Construction</h3>
                <p class="description">
                  I worked for a construction company called MS Renovations and
                  Projects from July to September.
                </p>
              </div>
            </div>
            <div class="timeline">
              <h3 class="lh">Education</h3>
              <div class="timeline-content">
                <div class="timeline-step"><span>2021</span>09</div>
                <h3 class="title">Web Developement</h3>
                <p class="description">
                  In September of 2021 I started my course on Web development at
                  Life Choices Academy. Since my inception in the academy i have
                  become versed in HTML, CSS, Javascript, Bootsrap, VUE JS,
                  Databases and MYSQl.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.resume {
  margin: 40px;
  padding: 40px;
  height: fit-content;
  background-color: rgb(34, 34, 34);
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
h1 {
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
  margin-bottom: 50px;
}
.lh {
  margin-left: 65%;
  margin-top: 10px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
}
.rh {
  margin-right: 65%;
  margin-top: 10px;
  color: white;
  font-family: "Courier New", Courier, monospace;
  font-size: 20px;
}
.main-timeline {
  font-family: "Poppins", sans-serif;
}
.main-timeline:after {
  content: "";
  display: block;
  clear: both;
}
.main-timeline .timeline {
  width: calc(50% + 30px);
  padding: 0 80px 0 0;
  float: left;
  position: relative;
  z-index: 1;
}
.main-timeline .timeline-content {
  color: rgb(0, 0, 0);
  background: #fff;
  min-height: 130px;
  padding: 20px 20px 20px 70px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  border-radius: 50px;
  display: block;
  z-index: 0;
  text-decoration: none;
}
.main-timeline .timeline-content:hover {
  text-decoration: none;
}
.main-timeline .timeline-content:after {
  content: "";
  background: linear-gradient(#3b3b3b, #666);
  width: 50%;
  border-radius: 50px;
  position: absolute;
  right: 0;
  top: 2px;
  bottom: 2px;
  z-index: -1;
}
.main-timeline .timeline-icon {
  color: #5a5a5a;
  font-size: 35px;
  line-height: 35px;
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  left: 18px;
}
.main-timeline .timeline-step {
  color: #fff;
  font-size: 42px;
  line-height: 40px;
  font-weight: 600;
  text-align: center;
  text-transform: uppercase;
  transform: translateY(-50%);
  position: absolute;
  top: 50%;
  right: 16px;
}
.main-timeline .timeline-step span {
  font-size: 18px;
  line-height: 22px;
  display: block;
}
.main-timeline .title {
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 1px;
  text-align: center;
  text-transform: uppercase;
  margin: 0;
}
.main-timeline .title:after {
  content: "";
  background-color: #5f5f5f;
  height: 3px;
  width: 100px;
  margin: 10px auto;
  display: block;
  clear: both;
}
.main-timeline .description {
  font-size: 13px;
  font-weight: 300;
  letter-spacing: 0.7px;
  line-height: 18px;
  margin: 0;
}
.main-timeline .timeline:nth-child(even) {
  float: right;
  padding: 0 0 0 80px;
}
.main-timeline .timeline:nth-child(even) .timeline-content {
  padding: 20px 70px 20px 25px;
}
.main-timeline .timeline:nth-child(even) .timeline-content:after {
  right: auto;
  left: 0;
}
.main-timeline .timeline:nth-child(even) .timeline-icon {
  left: auto;
  right: 17px;
}
.main-timeline .timeline:nth-child(even) .timeline-step {
  right: auto;
  left: 16px;
}
.main-timeline .timeline:nth-child(4n + 2) .timeline-content:after {
  background: linear-gradient(#666, #3b3b3b);
}
.main-timeline .timeline:nth-child(4n + 2) .timeline-icon {
  color: #3b3b3b;
}
.main-timeline .timeline:nth-child(4n + 2) .title:after {
  background: #3b3b3b;
}
.main-timeline .timeline:nth-child(4n + 3) .timeline-content:after {
  background: linear-gradient(#666, #3b3b3b);
}
.main-timeline .timeline:nth-child(4n + 3) .timeline-icon {
  color: #7f47a0;
}
.main-timeline .timeline:nth-child(4n + 3) .title:after {
  background: #666;
}
.main-timeline .timeline:nth-child(4n + 4) .timeline-content:after {
  background: linear-gradient(#666, #3b3b3b);
}
.main-timeline .timeline:nth-child(4n + 4) .timeline-icon {
  color: #666;
}
.main-timeline .timeline:nth-child(4n + 4) .title:after {
  background: #666;
}
@media screen and (max-width: 767px) {
  .main-timeline .timeline {
    width: 100%;
    margin: 0 0 30px;
  }
}
@media screen and (max-width: 576px) {
  .main-timeline .timeline,
  .main-timeline .timeline:nth-child(even) {
    padding: 80px 0 0;
  }
  .main-timeline .timeline-content,
  .main-timeline .timeline:nth-child(even) .timeline-content {
    padding: 20px 20px 70px 20px;
    border-radius: 20px;
  }
  .main-timeline .timeline-content:after,
  .main-timeline .timeline:nth-child(even) .timeline-content:after {
    width: 100%;
    border-radius: 20px;
    top: 0;
    bottom: 50px;
  }
  .main-timeline .timeline-icon,
  .main-timeline .timeline:nth-child(even) .timeline-icon {
    transform: translateY(0) translateX(-50%);
    left: 50%;
    right: auto;
    top: auto;
    bottom: 17px;
  }
  .main-timeline .timeline-step,
  .main-timeline .timeline:nth-child(even) .timeline-step {
    transform: translateY(0) translateX(-50%);
    left: 50%;
    right: auto;
    top: 11px;
  }
}
@media screen and (max-width: 500px) {
  h1 {
    font-size: 30px;
  }
  .lh {
    margin-left: 45%;
  }
  .resume {
    margin-right: 0%;
    margin-left: 0%;
  }
}
</style>
