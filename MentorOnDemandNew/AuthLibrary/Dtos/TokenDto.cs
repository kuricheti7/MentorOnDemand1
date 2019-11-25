using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace AuthLibrary.Dtos
{
    public class TokenDto
    {
        
        [Required]
        public string Token { get; set; }

        public userInfoDto UserInfo { get; set; }
    }
}
