import { Grade } from '../../grades/models/grade';

export type StudentCreate = {
  first_name: string;
  mid_name: string;
  last_name: string;
  dob: Date | null | undefined;
  gender: string;
};

export type StudentResponse = {
  id: string;
  first_name: string;
  mid_name: string;
  last_name: string;
  dob?: string | null;
  gender?: string | null;
  img?: string | null;
};

export class Student {
  public id: string;
  public first_name: string;
  public last_name: string;
  public mid_name: string;
  public dob?: string | null;
  public gender?: string | null;
  public img?: string | null;
  public currentGrade: Grade | null;

  constructor(student: {
    id: string;
    first_name: string;
    mid_name: string;
    last_name: string;
    dob?: string | null;
    gender?: string | null;
    img?: string | null;
    currentGrade?: Grade;
  }) {
    this.id = student.id;
    this.first_name = student.first_name;
    this.mid_name = student.mid_name;
    this.last_name = student.last_name;
    this.dob = student.dob;
    this.gender = student.gender;
    this.img = student.img;
    this.currentGrade = student.currentGrade || null;
  }
}
