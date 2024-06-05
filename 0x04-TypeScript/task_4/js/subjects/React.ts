namespace Subjects {
    interface Teacher {
        experienceTeachingReact?: number;
    }

    export class React extends Subject {
        getRequirements(): string {
            return `Here is the list of requirements for React`;
        }
    }
}
