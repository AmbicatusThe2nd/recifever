﻿namespace recefever_webapi.Models
{
    public class RecipeDatabaseSettings
    {
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;

        public string UserCollectionName { get; set; } = null!;
        public string RecipeCollectionName { get; set; } = null!;
    }
}
