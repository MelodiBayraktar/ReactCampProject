import { useField } from "formik"; //input elemanının bilgilerini alır
import React from "react";
import { FormField, Label } from "semantic-ui-react";

export default function KodlamaIoTextInput({ ...props }) {
  //gelecek değerleri spread ile açtık
  //console.log(props);
  const [field, meta] = useField(props);

  //console.log(field);
  console.log(meta);
  return (
    <div>
        {/* stringi boola çevirmek için !! kullandık */}
      <FormField error={meta.touched && !!meta.error}> 
        <input {...field} {...props} />
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error}></Label>
        ) : null}
      </FormField>
    </div>
  );
}
