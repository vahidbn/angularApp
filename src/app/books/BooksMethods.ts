export class BooksMethods {

    categoryDescription( catID)
    {
        switch ( catID)
        {
            case "1":
                 return 'Inspire a child with 15% off all books\n' +
                    'Personalized storybooks for a braver, kinder and more confident 2019. Hooray!\n' +
                    '\n' +
                    'Use code INSPIRE'
                break;
            case "2":
                return 'Beautiful personalized books for children 0-4\n' +
                    'The perfect gift - Over 4 million books sold worldwide';
                break;

            case "3":
                return 'Beautiful personalized books for children 4-8\n' +
                    'The perfect gift - Over 4 million books sold worldwide';
                break;
        }
    }
}