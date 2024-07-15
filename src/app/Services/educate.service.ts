import { Injectable } from '@angular/core';
import { Educate, EducateQuestion, EducateResult } from '../Models/Educate';

@Injectable({
  providedIn: 'root'
})
export class EducateService {
  education : EducateQuestion[] = []
  results: EducateResult[] =[]
  constructor() { }
  getUserQuestions(){
    return this.education
  }

  getAllresults(){
    return this.results
  }
  addQuestion(newInfo:Educate){
    this.education.push(newInfo)
  }
  addResult(newResult:EducateResult
  ){
    this.results.push(newResult)
  }
 deleteQuestion(infoID:number){
  this.education.filter(info=> info.Id=== infoID)
  this.results.filter(r=> r.QuestionId=== infoID)
 }
 deleteAllQuestion(){
  this.education = []
  this.results =[]

 }
}
