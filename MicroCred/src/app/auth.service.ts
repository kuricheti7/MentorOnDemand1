import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//Student
  private _registerUserUrl = "http://localhost:9095/authservice/register";
  private _loginUserUrl = "http://localhost:9095/authservice/login";
  private _getUserDetailsUrl = "http://localhost:9095/studentservice";
  private _updateUserUrl = "http://localhost:9095/studentservice";
  private _blockedUrl = "http://localhost:9095/adminservice/blockunblock";
  private _getCourseByNameUrl = "http://localhost:9095/adminservice";
  private _StudentUpcomingUrl = "http://localhost:9095/studentservice/studupcom"
  private _StudentOngoingUrl = "http://localhost:9095/studentservice/studongng"
  private _StudentComptdUrl = "http://localhost:9095/studentservice/studcomp"
  private _addPaymentUrl =  "http://localhost:9095/studentservice/addpayment"
  private _applyTrainingUrl =  "http://localhost:9095/studentservice/applytraining"

  //Mentor
  private _registerMentorUrl = "http://localhost:9095/authservice/register";
  private _loginMentorUrl = "http://localhost:9095/authservice/login";
  private _getMentorDetailsUrl = "http://localhost:9095/mentorservice";
  private _updateMentorUrl = "http://localhost:9095/mentorservice";
  private _addTrainingUrl = "http://localhost:9095/mentorservice/addtraining"
  private _MentorUpcomingUrl = "http://localhost:9095/mentorservice/mentorupcom"
  private _MentorOngoingUrl = "http://localhost:9095/mentorservice/mentorongng"
  private _MentorComptdUrl = "http://localhost:9095/mentorservice/mentorcomp"
  
 //Admin
  private _loginAdminUrl = "http://localhost:9095/authservice/login";
  private _getUserListUrl = "http://localhost:9095/adminservice/studentlist";
  private _getMentorListUrl ="http://localhost:9095/adminservice/mentorlist";
  private _getTrainingByIdUrl = "http://localhost:9095/mentorservice/gettraining";
  private _getTrainingListUrl = "http://localhost:9095/studentservice/traininglist";
  private _getPaymentListUrl = "http://localhost:9095/studentservice/paymentlist";
 
 
 //Courses
  private _getCourseListUrl = "http://localhost:9095/adminservice/courselist";
  private _getCourseDetailsUrl = "http://localhost:9095/adminservice";
  private _updateCourseUrl = "http://localhost:9095/adminservice";
  private _addCourseUrl = "http://localhost:9095/adminservice/addcourse";
  private _deleteCourseUrl = "http://localhost:9095/adminservice/deletecourse"
  private _updateTrainingProgressUrl = "http://localhost:9095/mentorservice/updateProgress"


  constructor(private http: HttpClient, private _router: Router) { }

  addPayment(value1)
  {
    return this.http.post<any>(this._addPaymentUrl,value1)
  }

  applyTraining(value2)
  {
    return this.http.put<any>(this._applyTrainingUrl,value2)
  }

  updateProgress(id,value)
  {
    console.log(value)  
    return this.http.get<any>(this._updateTrainingProgressUrl+"/"+id+'/'+value)
  }
  getTrainingById(id)
  {
    return this.http.get<any>(this._getTrainingByIdUrl+"/"+id)
  }
  addTraining(detals)
  {
    return this.http.post<any>(this._addTrainingUrl,detals)
  }
  getCourseById(id)
  {
    return this.http.get<any>(this._getCourseByNameUrl+"/"+id)
  }

  updateStatus(id)
  {
    return this.http.get<any>(this._blockedUrl+"/"+id)
  }

  registerUser(user) {
    
    return this.http.post<any>(this._registerUserUrl, user)
  }

  registerMentor(mentor) {
    return this.http.post<any>(this._registerMentorUrl, mentor)
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUserUrl, user)
  }

  loginAdmin(admin) {
    return this.http.post<any>(this._loginAdminUrl, admin)
  }

  loginMentor(mentor) {
    return this.http.post<any>(this._loginMentorUrl, mentor)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  getToken() {
    return localStorage.getItem('token')
  }

  getUser()
  {
    return localStorage.getItem('user')
  }

  getMentor()
  {
    return localStorage.getItem('mentor')
  }

  getCourse(id)
  {
    return this.http.get<any>(this._getCourseDetailsUrl+"/"+id)
  }

  
  logoutUser() {
    localStorage.removeItem('token'),
    localStorage.removeItem('id'),
    localStorage.removeItem('email')
    localStorage.removeItem('firstname'),
    localStorage.removeItem('lastname')
      this._router.navigate(['/home'])
  }

  studentList() {
    return this.http.get<any>(this._getUserListUrl)
  }

  mentorList() {
    return this.http.get<any>(this._getMentorListUrl)
  }

  courseList() {
    return this.http.get<any>(this._getCourseListUrl)
  }

  TrainingList() {
    return this.http.get<any>(this._getTrainingListUrl)
  }

  paymentsList() {
    return this.http.get<any>(this._getPaymentListUrl)
  }

  addCourse(course) {
    return this.http.post<any>(this._addCourseUrl, course)
  }

  

  deleteCourse(id) {
    const url = `${this._deleteCourseUrl}/${id}`;
    return this.http.delete<any>(url)
  }

  updateCourse(id,course) {
    return this.http.put<any>(this._updateCourseUrl+"/"+id, course)
  }

  getUserDetails(id)
  {
    return this.http.get<any>(this._getUserDetailsUrl+"/"+id)
  }

  getMentorDetails(id)
  {
    return this.http.get<any>(this._getMentorDetailsUrl+"/"+id)
  }

  updateUser(id,user)
  {
    return this.http.put<any>(this._updateUserUrl+"/"+id,user)
  }

  updateMentor(id,mentor)
  {
    return this.http.put<any>(this._updateMentorUrl+"/"+id,mentor)
  }

  getStudentUpcomngTrainings()
  {
    return this.http.get<any>(this._StudentUpcomingUrl)
  }

  getStudentOngoingTrainings(id)
  {
    return this.http.get<any>(this._StudentOngoingUrl+"/"+id)
  }

  getStudentComptdTrainings(id)
  {
    return this.http.get<any>(this._StudentComptdUrl+"/"+id)
  }


  getMentorUpcomngTrainings(id)
  {
    return this.http.get<any>(this._MentorUpcomingUrl+"/"+id)
  }

  getMentorOngoingTrainings(id)
  {
    return this.http.get<any>(this._MentorOngoingUrl+"/"+id)
  }

  getMentorComptdTrainings(id)
  {
    return this.http.get<any>(this._MentorComptdUrl+"/"+id)
  }
}
