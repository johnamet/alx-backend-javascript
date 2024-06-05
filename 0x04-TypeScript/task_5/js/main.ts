export interface MajorCredits {
    credits: number;
    brand: "MajorCredits"; // This property acts as a unique identifier
}

// Define a type for MinorCredits
export interface MinorCredits {
    credits: number;
    brand: "MinorCredits"; // This property acts as a unique identifier
}

// Function to sum MajorCredits
export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MajorCredits"
    };
}

// Function to sum MinorCredits
export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: "MinorCredits"
    };
}