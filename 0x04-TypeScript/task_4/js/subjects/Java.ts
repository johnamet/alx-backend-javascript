namespace Subjects {
    interface Teacher {
        experienceTeachingJava?: number;
    }

    export class Java extends Subject {
        getRequirements(): string {
            return `Here is the list of requirements for Java`;
        }
    }
}
