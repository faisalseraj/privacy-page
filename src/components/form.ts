import {
  FieldPath,
  FieldValues,
  Path,
  PathValue,
  UseFormReturn
} from 'react-hook-form';
import { ObjectSchema, ObjectShape } from 'yup';

import { useEffect } from 'react';

export const getDefaultValues = <T extends FieldValues>(
  obj: Record<string, unknown> | null,
  schema: ObjectSchema<ObjectShape>,
  group?: string
) => {
  if (obj) {
    return Object.fromEntries(
      Object.keys(schema.describe().fields)
        .filter((n) => (group ? n.startsWith(`${group}_`) : true))
        .map((n) => [
          n as FieldPath<T>,
          obj[n.substring(n.indexOf('_') + 1)] as PathValue<
            T,
            Path<T>
          >
        ])
    ) as unknown as T;
  }
};

export const setObject = <T extends FieldValues>(
  obj: Record<string, unknown> | null,
  form: UseFormReturn<T>,
  schema: ObjectSchema<ObjectShape>,
  group?: string
) => {
  if (obj) {
    Object.keys(schema.describe().fields)
      .filter((n) => (group ? n.startsWith(`${group}_`) : true))
      .forEach((n) =>
        form.setValue(
          n as FieldPath<T>,
          obj[n.substring(n.indexOf('_') + 1)] as PathValue<
            T,
            Path<T>
          >
        )
      );
  }
};

export const getObject = <T extends FieldValues>(
  form: UseFormReturn<T>,
  schema: ObjectSchema<ObjectShape>,
  group?: string
) => {
  // We run the object through the schema to transform values to the right type
  const values = schema.validateSync(form.getValues());

  return Object.fromEntries(
    Object.keys(schema.describe().fields)
      .filter((n) => (group ? n.startsWith(`${group}_`) : true))
      .map((n) => [
        n.substring(n.indexOf('_') + 1),
        values[n as FieldPath<T>]
      ])
  ) as unknown as Partial<T>;
};

export const getFieldName = (name: string, group?: string) => {
  return `${group ? `${group}_` : ''}${name}`;
};

export const submitAndReset =
  <T extends FieldValues>(form: UseFormReturn<T>, save: () => Promise<unknown>) =>
  () => {
    try {
      form.handleSubmit(
        () =>
          save().then(() => {
            // Clears the isDirty flag so that we can change route
            form.reset(undefined, { keepValues: true });
          }),
        (errors) => {
          console.log(errors);
        }
      )();
    } catch (err) {
      console.log(err);
    }
  };

export const useOnSubmitSuccessful = <T extends FieldValues>(
  form: UseFormReturn<T>,
  handler: () => void
) => {
  const { isSubmitSuccessful } = form.formState;
  useEffect(() => {
    if (isSubmitSuccessful) {
      // Reset isSubmitSuccessful to avoid loop
      form.reset(undefined, { keepValues: true });
      handler();
    }
  }, [form, handler, isSubmitSuccessful]);
};

export const allowEmptyNumber = (value: unknown, originalValue: unknown) => {
  return isNaN(originalValue as number) ? undefined : value;
};

export const defaultToZeroNumber = (value: unknown, originalValue: unknown) => {
  return isNaN(originalValue as number) ? 0 : value;
};
