namespace Subjects {
    export class Subject {
        private teacher: Teacher | undefined;

        setTeacher(teacher: Teacher): void {
            this.teacher = teacher;
        }

        getRequirements(): string {
            return `Here is the list of requirements for ${this.constructor.name}`;
        }

        getAvailableTeacher(): string {
            if (this.teacher) {
                return `Available Teacher: ${this.teacher.firstName}`;
            } else {
                return 'No available teacher';
            }
        }
    }
}
