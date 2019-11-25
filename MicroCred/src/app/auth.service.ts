import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
//Student
  private _registerUserUrl = "https://localhost:44346/authservice/register";
  private _loginUserUrl = "https://localhost:44346/authservice/login";
  private _getUserDetailsUrl = "https://localhost:44346/studentservice";
  private _updateUserUrl = "https://localhost:44346/studentservice";
  private _blockedUrl = "https://localhost:44346/adminservice/blockunblock";
  private _getCourseByNameUrl = "https://localhost:44346/adminservice";
  private _StudentUpcomingUrl = "https://localhost:44346/studentservice/studupcom"
  private _StudentOngoingUrl = "https://localhost:44346/studentservice/studongng"
  private _StudentComptdUrl = "https://localhost:44346/studentservice/studcomp"
  private _addPaymentUrl =  "https://localhost:44346/studentservice/addpayment"
  private _applyTrainingUrl =  "https://localhost:44346/studentservice/applytraining"

  //Mentor
  private _registerMentorUrl = "https://localhost:44346/authservice/register";
  private _loginMentorUrl = "https://localhost:44346/authservice/login";
  private _getMentorDetailsUrl = "https://localhost:44346/mentorservice";
  private _updateMentorUrl = "https://localhost:44346/mentorservice";
  private _addTrainingUrl = "https://localhost:44346/mentorservice/addtraining"
  private _MentorUpcomingUrl = "https://localhost:44346/mentorservice/mentorupcom"
  private _MentorOngoingUrl = "https://localhost:44346/mentorservice/mentorongng"
  private _MentorComptdUrl = "https://localhost:44346/mentorservice/mentorcomp"
  
 //Admin
  private _loginAdminUrl = "https://localhost:44346/authservice/login";
  private _getUserListUrl = "https://localhost:44346/adminservice/studentlist";
  private _getMentorListUrl ="https://localhost:44346/adminservice/mentorlist";
  private _getTrainingByIdUrl = "https://localhost:44346/mentorservice/gettraining";
  private _getTrainingListUrl = "https://localhost:44346/studentservice/traininglist";
  private _getPaymentListUrl = "https://localhost:44346/studentservice/paymentlist";
 
 
 //Courses
  private _getCourseListUrl = "https://localhost:44346/adminservice/courselist";
  private _getCourseDetailsUrl = "https://localhost:44346/adminservice";
  private _updateCourseUrl = "https://localhost:44346/adminservice";
  private _addCourseUrl = "https://localhost:44346/adminservice/addcourse";
  private _deleteCourseUrl = "https://localhost:44346/adminservice/deletecourse"
  private _updateTrainingProgressUrl = "https://localhost:44346/mentorservice/updateProgress"


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
