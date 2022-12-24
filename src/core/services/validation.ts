import validator from 'validator';

type RuleResponse = { valid: boolean; msg: string };

export const Validator = {
  isEmail(field: string, val: string): RuleResponse {
    return {
      valid: validator.isEmail(val),
      msg: `${field} is not a valid email`,
    };
  },

  isString(field: string, val: string): RuleResponse {
    return {
      valid: typeof val === 'string',
      msg: `${field} must be valid string`,
    };
  },

  isNotEmpty(field: string, val: any): RuleResponse {
    return {
      valid:
        val !== undefined &&
        val !== null &&
        (Array.isArray(val) ? val.length === 0 : true) &&
        val !== undefined &&
        (typeof val === 'string' ? val.trim() !== '' : true) &&
        (typeof val === 'object' ? Object.values(val).length !== 0 : true),
      msg: `${field} can not be empty`,
    };
  },
};

export const validateRules = (rules: RuleResponse[]): string | null => {
  for (const rule of rules) {
    if (!rule.valid) {
      return rule.msg;
    }
  }

  return null;
};
