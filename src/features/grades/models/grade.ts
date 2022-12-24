import { Model } from '../../../core/models/Model';
import { BaseResponseModel } from '../../../core/util/types';

export type GradeResponse = {
  name: string;
} & BaseResponseModel;

export type GradeAddEdit = {
  name: string;
};

export class Grade extends Model {
  name: string;

  constructor(grade: { name: string } & BaseResponseModel) {
    super({
      id: grade.id,
      created_at: grade.created_at,
      updated_at: grade.updated_at,
    });
    this.name = grade.name;
  }

  fromResponse(grade: GradeResponse): Grade {
    return new Grade({ ...grade });
  }
}
