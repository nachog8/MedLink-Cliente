import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Progress } from '@/components/ui/progress';
import { skills } from '@/data/dashboard-professional';

export default function CardMedicalSkills() {
  return (
    <Card className="max-h-min">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          Habilidades Médicas
        </CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="font-medium">{skill.title}</h3>
              <span className="text-sm font-medium">{skill.progress}%</span>
            </div>

            <Progress value={skill.progress} className="h-2" />
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
