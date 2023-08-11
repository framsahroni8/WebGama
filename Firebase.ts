rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /Location/{document=**} {
      allow read, write: if true;
    }
    match /Menu/{document=**} {
      allow read, write: if true;
    }
    match /Comment/{document=**} {
      allow read, write: if true;
    }
  }
}
