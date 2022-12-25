import { Model } from '../../../../core/models/Model';
import { BaseResponseModel } from '../../../../core/util/types';

export type GradeResponse = {
  name: string;
  order: number;
} & BaseResponseModel;

export type GradeAddEdit = {
  name: string;
  order: number;
};

export class Grade extends Model {
  name: string;
  order: number;

  constructor(grade: { name: string; order: number } & BaseResponseModel) {
    super({
      id: grade.id,
      created_at: grade.created_at,
      updated_at: grade.updated_at,
    });
    this.name = grade.name;
    this.order = grade.order;
  }

  fromResponse(grade: GradeResponse): Grade {
    return new Grade({ ...grade });
  }
}
