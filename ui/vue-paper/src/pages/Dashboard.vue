<template>
  <div>
    <!--Stats cards-->
    <div class="row">
      <div class="col-md-6 col-xl-3" v-for="stats in statsCards" :key="stats.title">
        <stats-card>
          <div class="icon-big text-center" :class="`icon-${stats.type}`" slot="header">
            <i :class="stats.icon"></i>
          </div>
          <div class="numbers" slot="content">
            <p>{{stats.title}}</p>
            {{stats.value}}
          </div>
          <div class="stats" slot="footer">
            <i :class="stats.footerIcon"></i> {{stats.footerText}}
          </div>
        </stats-card>
      </div>
    </div>

    <!--Charts-->
    <div class="row justify-content-center main-container" >
      <div class="col-md-8 justify-content-center">
        <div class="row justify-content-center">
          <div class="col-md-4 padding-10 image-container" v-for="(company ,index) in companies.data" :key="index">
            <div class="col-md-12 pad-md-0 image-name-container">
              <div class="col-md-12 pad-md-0">
                <img :src="getLogo(company.logo)" height="180px" width="100%">
              </div>
              <div class="col-md-12 pad-md-0 text-center text-box">
                {{company.name}}
              </div>
            </div>
          </div>
          <div class="col-md-12">
            <div class="row btn-container">
              <div class="col-md-6">
                  <span v-if="companies.prev_page_url">
                    <a @click="getaNextPageCompany(companies.prev_page_url)" href="javascript:;" class="btn btn-info prev-btn btn-sm"><i class="ti-arrow-left"></i></a>
                  </span>
                  <span v-else>
                    <a href="javascript:;" class="btn btn-info prev-btn btn-sm disabled"><i class="ti-arrow-left"></i></a>
                  </span>
              </div>

              <div class="col-md-6">
                <span v-if="companies.current_page == companies.last_page">
                 <a  href="javascript:;" class="btn btn-info btn-sm next-btn disabled"><i class="ti-arrow-right"></i></a>
                </span>
                <span v-else>
                   <a @click="getaNextPageCompany(companies.next_page_url)" href="javascript:;" class="btn btn-info btn-sm next-btn"><i class="ti-arrow-right"></i></a>
                </span>
              </div>
               
              </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
import axios from "axios";
import { StatsCard, ChartCard } from "@/components/index";
import { PaperTable } from "@/components";

import Chartist from 'chartist';
export default {
  props: ['user'],
  components: {
    StatsCard,
    ChartCard,
    PaperTable
  },
  /**
   * Chart data used to render stats, charts. Should be replaced with server data
   */
  data() {
    return {
      companies: "",
      statsCards: [
        {
          type: "warning",
          icon: "ti-user",
          title: "Users",
          value: "",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        },
        {
          type: "success",
          icon: "ti-wallet",
          title: "Companies",
          value: "",
          footerText: "Last day",
          footerIcon: "ti-calendar"
        },
        {
          type: "danger",
          icon: "ti-pulse",
          title: "Employees",
          value: " ",
          footerText: "In the last hour",
          footerIcon: "ti-timer"
        },
        {
          type: "info",
          icon: "ti-user",
          title: "Admins",
          value: "",
          footerText: "Updated now",
          footerIcon: "ti-reload"
        }
      ], 
     
    };
  },
  mounted(){
    this.getCompany();
  },
  
  methods: {
    getLogo(url){
      return "./storage/logo/"+url;
    },
    getCompany(){
        axios.get('company/home/').then(response => {
            this.companies = response.data.companies;
            this.statsCards[0].value = response.data.users;
            this.statsCards[1].value = response.data.company;
            this.statsCards[2].value = response.data.employees;
            this.statsCards[3].value = response.data.admins;  
        }).catch(error => {
            this.errors.push(error.response.data.error);
        });
      },
    getaNextPageCompany(url){
        axios.get(url).then(response => {
            this.companies = response.data.companies;
        }).catch(error => {
            this.errors.push(error.response.data.error);
        });
      },
  }
};
</script>
<style>
.image-container{
  margin-bottom: 30px;
}
.main-container{
  padding-top: 50px;
  padding-bottom: 50px;
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
  box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
  background-color: #FFFFFF;
  color: #252422;
  margin-bottom: 20px;
  z-index: 1;
  border: none;
}
.next-btn{
  float: left;
}
.prev-btn{
  float: right;
}
.btn-container{
  margin-top: 40px;
}
.pad-md-0{
  padding: 0px !important;
}
.image-name-container{
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
  box-shadow: 0 2px 2px rgba(204, 197, 185, 0.5);
}
.text-box{
  color:#777;
  padding-top: 8px !important;
  padding-bottom: 8px !important;
}
.padding-10{
  padding: 10px !important;
}
</style>
