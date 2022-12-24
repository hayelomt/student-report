export type GradeResponse = {
  name: string;
};

export class Grade {
  name: string;

  constructor({ name }: { name: string }) {
    this.name = name;
  }

  fromResponse(grade: GradeResponse): Grade {
    return new Grade({ ...grade });
  }
}
