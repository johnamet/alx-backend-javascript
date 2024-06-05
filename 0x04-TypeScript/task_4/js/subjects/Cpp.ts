namespace Subjects {
    interface Teacher {
        experienceTeachingC?: number;
    }

    export class Cpp extends Subject {
        getRequirements(): string {
            return `Here is the list of requirements for C++`;
        }
    }
}
