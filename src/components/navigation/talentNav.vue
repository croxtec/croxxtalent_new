<template>
  <div class="talent-nav">
    <div class="container">
      <ul class="mb-0">
        <li>
          <router-link to="/">
            <img src="@/assets/img/logo.png" width="180px" alt="" />
          </router-link>
        </li>
        <li><router-link to="/dashboard">Home</router-link></li>
        <li><router-link to="/resume">Resume</router-link></li>
        <li><router-link to="/competencies">Competencies</router-link></li>
        <li><router-link to="/jobs">Jobs</router-link></li>
        <li><router-link to="/training">Training</router-link></li>
        <li>
          <div class="search">
            <i-icon icon="ri:search-2-line" class="nav-icon" />
            <input type="search" placeholder="Search" />
          </div>
        </li>
        <li>
          <div class="menu-icon-container">
            <i-icon icon="tabler:message-2" class="menu-icon" />
          </div>
        </li>
        <li>
          <div class="menu-icon-container">
            <i-icon icon="nimbus:notification" class="menu-icon" />
          </div>
        </li>
        <li>
          <div class="user-avatar">
            <img
              src="https://cdn1.iconfinder.com/data/icons/user-avatars-2/300/10-1024.png"
              alt=""
            />
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
