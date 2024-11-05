'use client';

import { useState } from 'react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

type FormField =
  | 'physicalActivity'
  | 'smoking'
  | 'alcoholism'
  | 'otherSubstances'
  | 'recentVaccination'
  | 'other';

export default function HealthForm() {
  const [formData, setFormData] = useState<Record<FormField, string | null>>({
    physicalActivity: null,
    smoking: null,
    alcoholism: null,
    otherSubstances: null,
    recentVaccination: null,
    other: null,
  });

  const [details, setDetails] = useState<Record<FormField, string>>({
    physicalActivity: '',
    smoking: '',
    alcoholism: '',
    otherSubstances: '',
    recentVaccination: '',
    other: '',
  });

  const handleRadioChange = (field: FormField, value: string) => {
    setFormData((prev) => {
      // Si el valor seleccionado es el mismo que el actual, deseleccionamos
      if (prev[field] === value) {
        return { ...prev, [field]: null };
      }
      // Si no, seleccionamos el nuevo valor
      return { ...prev, [field]: value };
    });
  };

  const handleDetailsChange = (field: FormField, value: string) => {
    setDetails((prev) => ({ ...prev, [field]: value }));
  };

  const handleNoToAll = () => {
    const newFormData = Object.keys(formData).reduce(
      (acc, key) => {
        acc[key as FormField] = 'no';
        return acc;
      },
      {} as Record<FormField, string>
    );

    setFormData(newFormData);
    setDetails({
      physicalActivity: '',
      smoking: '',
      alcoholism: '',
      otherSubstances: '',
      recentVaccination: '',
      other: '',
    });
  };

  const handleSave = () => {
    console.log('Form Data:', formData);
    console.log('Details:', details);
    // Aquí puedes agregar la lógica para guardar los datos
  };

  const renderField = (field: FormField, label: string) => (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <Label className="text-base font-medium">{label}</Label>
        <RadioGroup
          onValueChange={(value) => handleRadioChange(field, value)}
          value={formData[field] || ''}
          className="flex space-x-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="si" id={`${field}-si`} />
            <Label htmlFor={`${field}-si`} className="text-sm">
              Sí
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id={`${field}-no`} />
            <Label htmlFor={`${field}-no`} className="text-sm">
              No
            </Label>
          </div>
        </RadioGroup>
      </div>
      {formData[field] === 'si' && (
        <Textarea
          placeholder={`Detalles sobre ${label.toLowerCase()}`}
          value={details[field]}
          onChange={(e) => handleDetailsChange(field, e.target.value)}
          className="mt-2"
        />
      )}
    </div>
  );

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Formulario de Salud</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {renderField('physicalActivity', 'Actividad física')}
        {renderField('smoking', 'Tabaquismo')}
        {renderField('alcoholism', 'Alcoholismo')}
        {renderField('otherSubstances', 'Uso de otras sustancias (drogas)')}
        {renderField('recentVaccination', 'Vacuna o inmunización reciente')}
        {renderField('other', 'Otros')}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleNoToAll}>
          No a todo
        </Button>
        <Button onClick={handleSave}>Guardar</Button>
      </CardFooter>
    </Card>
  );
}
